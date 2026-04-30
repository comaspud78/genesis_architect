// Custom Item Logic

PlayerEvents.tick(event => {
    const { player, entity, level } = event

    // --- CROWN: UPDATED SLOW-FALL LOGIC ---
    if (entity.isPlayer() && entity.getHeadArmorItem().id == 'architect:flower_crown') {
        // If falling more than 1 block and moving downwards
        if (entity.fallDistance > 1.0 && entity.motionY < 0) {
            // Apply slow fall (10 ticks duration)
            entity.potionEffects.add('minecraft:slow_falling', 10, 0, true, false)
            
            // Visual flavor
            if (level.time % 5 == 0) {
                level.spawnParticles('minecraft:spore_blossom_air', true, entity.x, entity.y, entity.z, 5, 0.2, 0.2, 0.2, 0.02)
            }
        }
    }

    if (!player || player.fake) return

    // --- TUNIC: HUNGER/ENERGY TRADE-OFF ---
    if (player.getChestArmorItem().id == 'architect:flower_tunic') {
        // Slow drain
        if (level.time % 400 == 0) {
            if (player.saturationLevel > 0) {
                player.setSaturationLevel(Math.max(0, player.saturationLevel - 0.5))
            } else if (player.foodLevel > 6) {
                player.setFoodLevel(player.foodLevel - 1)
            }
        }

        // Emergency Refill
        if (player.health <= 10 && !player.persistentData.vampireSurgeActive) {
            player.setFoodLevel(20)
            player.setSaturationLevel(15)
            player.tell(Text.lightPurple('The Flower Tunic returns your energy when you need it most.'))
            player.runCommandSilent('playsound minecraft:entity.player.burp players @s ~ ~ ~ 1.0 0.5')
            player.runCommandSilent('particle minecraft:damage_indicator ~ ~1 ~ 0.5 0.5 0.5 0.1 20')
            player.persistentData.vampireSurgeActive = true
        }

        if (player.health > 10 && player.persistentData.vampireSurgeActive) {
            player.persistentData.vampireSurgeActive = false
        }
    }

    // --- LEGGINGS: UI & NOTIFICATION ---
    if (player.getLegsArmorItem().id == 'architect:flower_leggings') {
        let now = level.time
        let cooldownEnd = player.persistentData.flowerThornsTime || 0
        let remaining = cooldownEnd - now

        if (remaining <= 0) {
            if (!player.persistentData.leewayReadyNotified && cooldownEnd != 0) {
                player.tell(Text.green('The Flower Leggings may shield you once more.'))
                player.runCommandSilent('playsound minecraft:block.amethyst_block.chime players @a ~ ~ ~ 1.0 1.5')
                player.persistentData.leewayReadyNotified = true
            }
            player.paint({leeway_cd: {remove: true}})
        } else {
            let seconds = Math.ceil(remaining / 20)
            player.paint({leeway_cd: {type: 'text', text: `Leeway: ${seconds}s`, x: 10, y: -10, alignX: 'left', alignY: 'bottom', draw: 'ingame'}})
        }
    } else {
        player.paint({leeway_cd: {remove: true}})
    }

    // --- BOOTS: STEP HEIGHT & SPEED ---
    const stepAttr = 'forge:step_height_addition'
    if (player.getFeetArmorItem().id == 'architect:flower_boots') {
        if (player.getAttributeBaseValue(stepAttr) != 0.4) {
            player.setAttributeBaseValue(stepAttr, 0.4)
        }
        if (level.time % 20 == 0) {
            player.potionEffects.add('minecraft:speed', 40, 0, false, false)
        }
    } else {
        if (player.getAttributeBaseValue(stepAttr) != 0) {
            player.setAttributeBaseValue(stepAttr, 0)
        }
    }
})

EntityEvents.hurt(event => {
    const { entity, level, source } = event
    const dmg = event.getDamage()
    if (!entity.isPlayer()) return

    // --- LEGGINGS: COOLDOWN TRIGGER ---
    if (entity.getLegsArmorItem().id == 'architect:flower_leggings' && dmg > 0) {
        let now = level.time
        let cooldownEnd = entity.persistentData.flowerThornsTime || 0
        
        if (now >= cooldownEnd) {
            event.cancel()

            entity.setInvulnerableTicks(120)
            level.spawnParticles('minecraft:spore_blossom_air', true, entity.x, entity.y + 1, entity.z, 100, 1, 1, 1, 0.1)
            entity.runCommandSilent('playsound minecraft:block.flowering_azalea.place players @a ~ ~ ~ 1.0 0.5')
            entity.tell(Text.lightPurple('The Flower Leggings shield you from further harm.'))
            
            entity.persistentData.flowerThornsTime = now + 1200
            entity.persistentData.leewayReadyNotified = false 
        }
    }

    // --- ENDER ARM VWOOP ---
    // 1. Attack Particles (When YOU hit something)
  if (source.actual && source.actual.mainHandItem.id == 'architect:ender_arm') {
    level.spawnParticles('minecraft:portal', true, entity.x, entity.y + 1, entity.z, 20, 0.5, 0.5, 0.5, 0.1);
  }

  // 2. Defense Teleport (When YOU get hit)
  if (entity.isPlayer() && entity.mainHandItem.id == 'architect:ender_arm' && source.actual && source.actual.isLiving()) {
    
    // Use KubeJS's persistent data for a reliable cooldown
        let now = level.time;
        if (!entity.persistentData.enderArmCooldown || now >= entity.persistentData.enderArmCooldown) {
            
            let oldX = entity.x;
            let oldY = entity.y;
            let oldZ = entity.z;
            
            // Randomize position (up to 10 blocks)
            let dx = (Math.random() - 0.5) * 20;
            let dz = (Math.random() - 0.5) * 20;
            let newX = oldX + dx;
            let newZ = oldZ + dz;
            let newY = level.getHeight('motion_blocking', newX, newZ);

            // Visuals at OLD location
            level.spawnParticles('minecraft:reverse_portal', true, oldX, oldY + 1, oldZ, 25, 0.5, 0.5, 0.5, 0.2);
            level.playSound(null, oldX, oldY, oldZ, 'minecraft:entity.enderman.teleport', 'players', 1.0, 1.0);

            // Teleport the player
            entity.teleportTo(newX, newY, newZ);

            // Visuals at NEW location
            level.spawnParticles('minecraft:portal', true, newX, newY + 1, newZ, 25, 0.5, 0.5, 0.5, 0.2);
            level.playSound(null, newX, newY, newZ, 'minecraft:entity.enderman.teleport', 'players', 1.0, 1.0);

            // Set cooldown (60 ticks = 3 seconds)
            entity.persistentData.enderArmCooldown = now + 60;
            
            // Add the visual cooldown overlay on the item bar
            entity.addItemCooldown('architect:ender_arm', 60);
        }
    }
})

BlockEvents.leftClicked(event => {
    const { block, player } = event
    const unbreakables = [
        'minecraft:bedrock', 
        'minecraft:end_portal_frame',
        'minecraft:reinforced_deepslate'
    ]

    if (unbreakables.includes(block.id) && player.mainHandItem.id == 'architect:ender_hand') {
        block.popItem(block.id)
        block.set('minecraft:air')
        player.mainHandItem.damageValue += 2
        if (!player.persistentData.brokeUnbreakable) {
            player.tell(Text.lightPurple("The Hand of Sovereignty rewrites reality..."))
            player.persistentData.brokeUnbreakable = true
        }
    }
})