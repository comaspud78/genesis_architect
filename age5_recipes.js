// Age 5 Recipes

ServerEvents.recipes(event => {

    const runeRec = (output, catalyst, pigment, enchantment, level ) => {
        let recipe = event.shaped(
            Item.of(output, `{StoredEnchantments:[{id:"${enchantment}",lvl:${level}s}]}`), [
            'LL',
            'CP'
        ], {
            L: 'minecraft:lapis_lazuli',
            C: catalyst,
            P: pigment
        })

        if (catalyst.includes('_bucket')) {
            recipe.replaceIngredient(catalyst, 'minecraft:bucket')
        }
        
        if (pigment.includes('_bucket')) {
            recipe.replaceIngredient(pigment, 'minecraft:bucket')
        }
    }

    event.shaped('architect:null_rune', [
        'LL',
        'LL'
    ], { L: 'minecraft:lapis_lazuli' })

    runeRec('architect:bandage_rune', 'minecraft:sculk_catalyst', 'minecraft:anvil', 'minecraft:mending', 1)
    runeRec('architect:durable_rune', 'minecraft:obsidian', 'minecraft:diamond', 'minecraft:unbreaking', 1)
    runeRec('architect:shadow_rune', 'minecraft:ghast_tear', 'minecraft:phantom_membrane', 'minecraft:vanishing_curse', 1)
    
        // Armor Runes

    runeRec('architect:dolphin_rune', 'minecraft:prismarine_shard', 'minecraft:redstone', 'minecraft:aqua_affinity', 1)
    runeRec('architect:creeper_rune', 'minecraft:obsidian', 'minecraft:end_portal_frame', 'minecraft:blast_protection', 1)
    runeRec('architect:bound_rune', 'minecraft:vine', 'minecraft:gravel', 'minecraft:binding_curse', 1)
    //
    runeRec('architect:fathoms_rune', 'minecraft:prismarine_shard', 'minecraft:sugar', 'minecraft:depth_strider', 1)
    runeRec('architect:stumble_rune', 'minecraft:feather', 'minecraft:phantom_membrane', 'minecraft:feather_falling', 1)
    runeRec('architect:blaze_rune', 'minecraft:obsidian', 'minecraft:magma_block', 'minecraft:fire_protection', 1)
    //
    runeRec('architect:winter_rune', 'minecraft:feather', 'minecraft:prismarine', 'minecraft:frost_walker', 1)
    runeRec('architect:deflect_rune', 'minecraft:obsidian', 'minecraft:arrow', 'minecraft:projectile_protection', 1)
    runeRec('architect:protect_rune', 'minecraft:obsidian', 'minecraft:obsidian', 'minecraft:protection', 1)
    //
    runeRec('architect:gills_rune', 'minecraft:prismarine_shard', 'minecraft:pufferfish', 'minecraft:respiration', 1)
    runeRec('architect:soul_rune', 'minecraft:nether_wart', 'minecraft:sugar', 'minecraft:soul_speed', 1)
    //
    runeRec('architect:rose_rune', 'minecraft:vine', 'minecraft:pointed_dripstone', 'minecraft:thorns', 1)
    runeRec('architect:stealth_rune', 'minecraft:feather', 'minecraft:sugar', 'minecraft:swift_sneak', 1)
    
        // Melee Runes

    runeRec('architect:spider_rune', 'minecraft:prismarine_shard', 'minecraft:nautilus_shell', 'minecraft:bane_of_arthropods', 1)
    runeRec('architect:forge_rune', 'minecraft:blaze_powder', 'minecraft:gunpowder', 'minecraft:fire_aspect', 1)
    runeRec('architect:thief_rune', 'minecraft:emerald', 'architect:basic_spawn_egg', 'minecraft:looting', 1)
    //
    runeRec('architect:rejection_rune', 'minecraft:pointed_dripstone', 'minecraft:piston', 'minecraft:knockback', 1)
    runeRec('architect:cutting_rune', 'minecraft:pointed_dripstone', 'minecraft:iron_ingot', 'minecraft:sharpness', 1)
    //
    runeRec('architect:holy_rune', 'minecraft:pointed_dripstone', 'minecraft:lapis_lazuli', 'minecraft:smite', 1)
    runeRec('architect:cleave_rune', 'minecraft:pointed_dripstone', 'minecraft:glass', 'minecraft:sweeping', 1)
    
        // Ranged Runes

    runeRec('architect:storm_rune', 'minecraft:prismarine_shard', 'minecraft:lightning_rod', 'minecraft:channeling', 1)
    runeRec('architect:starshot_rune', 'minecraft:arrow', 'minecraft:blaze_rod', 'minecraft:flame', 1)
    runeRec('architect:drowned_rune', 'minecraft:prismarine_shard', 'minecraft:pointed_dripstone', 'minecraft:impaling', 1)
    //
    runeRec('architect:quiver_rune', 'minecraft:gravel', '#minecraft:logs', 'minecraft:infinity', 1)
    runeRec('architect:loyal_rune', 'minecraft:lapis_lazuli', 'minecraft:emerald', 'minecraft:loyalty', 1)
    runeRec('architect:geyser_rune', 'minecraft:water_bucket', 'minecraft:sugar', 'minecraft:riptide', 1)
    //
    runeRec('architect:splitting_rune', 'minecraft:arrow', 'minecraft:glass', 'minecraft:multishot', 1)
    runeRec('architect:lineup_rune', 'minecraft:arrow', 'minecraft:pointed_dripstone', 'minecraft:piercing', 1)
    runeRec('architect:strength_rune', 'minecraft:arrow', 'minecraft:end_stone', 'minecraft:power', 1)
    //
    runeRec('architect:distance_rune', 'minecraft:arrow', 'minecraft:piston', 'minecraft:punch', 1)
    runeRec('architect:reload_rune', 'minecraft:string', 'minecraft:sugar', 'minecraft:quick_charge', 1)
    
        // Tool Runes

    runeRec('architect:speed_rune', 'minecraft:iron_ingot', 'minecraft:sugar', 'minecraft:efficiency', 1)
    runeRec('architect:diamond_rune', 'minecraft:emerald', 'minecraft:diamond', 'minecraft:fortune', 1)
    runeRec('architect:boot_rune', 'minecraft:emerald', 'minecraft:heart_of_the_sea', 'minecraft:luck_of_the_sea', 1)
    runeRec('architect:shell_rune', 'minecraft:emerald', '#minecraft:fishes', 'minecraft:lure', 1)
    runeRec('architect:block_rune', 'minecraft:iron_ingot', '#minecraft:wool', 'minecraft:silk_touch', 1)
    
    const enchantData = {
        // univ
        'minecraft:mending': 1,
        'minecraft:unbreaking': 3,
        'minecraft:vanishing_curse': 1,

        // armor
        'minecraft:aqua_affinity': 1,
        'minecraft:blast_protection': 4, 
        'minecraft:binding_curse': 1,
        //
        'minecraft:depth_strider': 3,
        'minecraft:feather_falling': 4,
        'minecraft:fire_protection': 4,
        //
        'minecraft:frost_walker': 2,
        'minecraft:projectile_protection': 4,
        'minecraft:protection': 4,
        //
        'minecraft:respiration': 3,
        'minecraft:soul_speed': 3,
        //
        'minecraft:thorns': 3,
        'minecraft:swift_sneak': 3,

        // melee
        'minecraft:bane_of_arthropods': 5,
        'minecraft:fire_aspect': 2,
        'minecraft:looting': 3,
        //
        'minecraft:knockback': 2,
        'minecraft:sharpness': 5,
        //
        'minecraft:smite': 5,
        'minecraft:sweeping': 3,

        // ranged
        'minecraft:channeling': 1,
        'minecraft:flame': 1,
        'minecraft:impaling': 5,
        //
        'minecraft:infinity': 1,
        'minecraft:loyalty': 3,
        'minecraft:riptide': 3,
        //
        'minecraft:multishot': 1,
        'minecraft:piercing': 4,
        'minecraft:power': 5,
        //
        'minecraft:punch': 2,
        'minecraft:quick_charge': 3,

        // tools
        'minecraft:efficiency': 5,
        'minecraft:fortune': 3,
        'minecraft:luck_of_the_sea': 3,
        'minecraft:lure': 3,
        'minecraft:silk_touch': 1
    }

    const enchPath = (enchantId, runeItem) => {
        let maxLvl = enchantData[enchantId] || 1;

        event.shapeless(
            Item.of('minecraft:enchanted_book', `{StoredEnchantments:[{id:"${enchantId}",lvl:1s}]}`),
            [
                'architect:null_rune',
                'minecraft:book',
                runeItem
            ]
        )

        for (let lvl = 1; lvl < maxLvl; lvl++) {
            event.shapeless(
                Item.of('minecraft:enchanted_book', `{StoredEnchantments:[{id:"${enchantId}",lvl:${(lvl + 1)}s}]}`),
                [
                    runeItem,
                    Item.of('minecraft:enchanted_book', `{StoredEnchantments:[{id:"${enchantId}",lvl:${lvl}s}]}`).weakNBT()
                ]
            )
        }
    }

    // universals

    enchPath('minecraft:mending', 'architect:bandage_rune')
    enchPath('minecraft:unbreaking', 'architect:durable_rune')
    enchPath('minecraft:vanishing_curse', 'architect:shadow_rune')
    
    // armors

    enchPath('minecraft:aqua_affinity', 'architect:dolphin_rune')
    enchPath('minecraft:blast_protection', 'architect:creeper_rune')
    enchPath('minecraft:binding_curse', 'architect:bound_rune')
    //
    enchPath('minecraft:depth_strider', 'architect:fathoms_rune')
    enchPath('minecraft:feather_falling', 'architect:stumble_rune')
    enchPath('minecraft:fire_protection', 'architect:blaze_rune')
    //
    enchPath('minecraft:frost_walker', 'architect:winter_rune')
    enchPath('minecraft:projectile_protection', 'architect:deflect_rune')
    enchPath('minecraft:protection', 'architect:protect_rune')
    //
    enchPath('minecraft:respiration', 'architect:gills_rune')
    enchPath('minecraft:soul_speed', 'architect:soul_rune')
    //
    enchPath('minecraft:thorns', 'architect:rose_rune')
    enchPath('minecraft:swift_sneak', 'architect:stealth_rune')
    
    // melee
    
    enchPath('minecraft:bane_of_arthropods', 'architect:spider_rune')
    enchPath('minecraft:fire_aspect', 'architect:forge_rune')
    enchPath('minecraft:looting', 'architect:thief_rune')
    //
    enchPath('minecraft:knockback', 'architect:rejection_rune')
    enchPath('minecraft:sharpness', 'architect:cutting_rune')
    //
    enchPath('minecraft:smite', 'architect:holy_rune')
    enchPath('minecraft:sweeping', 'architect:cleave_rune')
    
    // ranged
    
    enchPath('minecraft:channeling', 'architect:storm_rune')
    enchPath('minecraft:flame', 'architect:starshot_rune')
    enchPath('minecraft:impaling', 'architect:drowned_rune')
    //
    enchPath('minecraft:infinity', 'architect:quiver_rune')
    enchPath('minecraft:loyalty', 'architect:loyal_rune')
    enchPath('minecraft:riptide', 'architect:geyser_rune')
    //
    enchPath('minecraft:multishot', 'architect:splitting_rune')
    enchPath('minecraft:piercing', 'architect:lineup_rune')
    enchPath('minecraft:power', 'architect:strength_rune')
    //
    enchPath('minecraft:punch', 'architect:distance_rune')
    enchPath('minecraft:quick_charge', 'architect:reload_rune')

    // tool

    enchPath('minecraft:efficiency', 'architect:speed_rune')
    enchPath('minecraft:fortune', 'architect:diamond_rune')
    enchPath('minecraft:luck_of_the_sea', 'architect:boot_rune')
    //
    enchPath('minecraft:lure', 'architect:shell_rune')
    enchPath('minecraft:silk_touch', 'architect:block_rune')

    event.shaped('architect:genesis_star', [
        ' N ',
        'NFN',
        ' N '
    ], {
        N: 'architect:null_rune', 
        F: Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:5}]}').weakNBT()
    })

    event.shaped('minecraft:nether_star', [
        'NEN',
        'SSS',
        'BSB'
    ], {
        N: 'minecraft:ender_eye',
        E: 'architect:genesis_star',
        S: 'minecraft:soul_sand',
        B: 'minecraft:blaze_powder'
    })

    const trimTypes = [
        { type: 'sentry', ingredient1: 'minecraft:tripwire_hook', ingredient2: 'minecraft:cobblestone'}, 
        { type: 'vex', ingredient1: 'minecraft:phantom_membrane', ingredient2: 'minecraft:cobblestone'},
        { type: 'wild', ingredient1: 'minecraft:moss_block', ingredient2: 'minecraft:mossy_cobblestone'},
        { type: 'coast', ingredient1: 'minecraft:kelp', ingredient2: 'minecraft:cobblestone'},
        { type: 'dune', ingredient1: 'minecraft:sandstone', ingredient2: 'minecraft:sandstone'},
        { type: 'wayfinder', ingredient1: 'minecraft:amethyst_shard', ingredient2: 'minecraft:terracotta'},
        { type: 'raiser', ingredient1: 'minecraft:lapis_lazuli', ingredient2: 'minecraft:terracotta'},
        { type: 'shaper', ingredient1: 'minecraft:emerald', ingredient2: 'minecraft:terracotta'},
        { type: 'host', ingredient1: 'minecraft:diamond', ingredient2: 'minecraft:terracotta'},
        { type: 'ward', ingredient1: 'minecraft:cobbled_deepslate', ingredient2: 'minecraft:cobbled_deepslate'},
        { type: 'silence', ingredient1: 'minecraft:sculk_catalyst', ingredient2: 'minecraft:cobbled_deepslate'},
        { type: 'tide', ingredient1: 'minecraft:nautilus_shell', ingredient2: 'minecraft:prismarine'},
        { type: 'snout', ingredient1: 'minecraft:rotten_flesh', ingredient2: 'minecraft:blackstone'},
        { type: 'rib', ingredient1: 'minecraft:bone', ingredient2: 'minecraft:netherrack'},
        { type: 'eye', ingredient1: 'minecraft:ender_eye', ingredient2: 'minecraft:end_stone'},
        { type: 'spire', ingredient1: 'minecraft:shulker_shell', ingredient2: 'minecraft:purpur_block'}
    ]
  
        trimTypes.forEach(trim => {
            if (trim.ingredient1 && trim.ingredient2) { 
                event.shaped(`minecraft:${trim.type}_armor_trim_smithing_template`, [
                    'DID',
                    'DND',
                    'DDD'
                ], {
                    D: 'minecraft:diamond',
                    I: trim.ingredient1,
                    N: trim.ingredient2
                })
            }
        })

        event.shaped('minecraft:netherite_upgrade_smithing_template', [
            'DND',
            'DRD',
            'DDD'
        ], {
            D: 'minecraft:diamond',
            N: 'minecraft:netherite_ingot',
            R: 'minecraft:netherrack'
        })

})