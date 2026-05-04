//      Modlist and Custom Items

//      -This modpack makes the assumption that the player has at least a
//      passing knowledge of Minecraft's core gameplay loop and some of its
//      basic mechanics, like using a composter to make bone meal.
//      -While I am working on a "guidebook" of sorts, it will most likely
//      not be present in the game for a while. However, when it is
//      released, it will give the player a path to follow to be able to
//      utilize these recipes somewhat effectively. How to optimize them is
//      up to the player.

//      - { AppleSkin } - Accessibility
//      - { Architectury API } - Mod Functionality
//      - { BaguetteLib } - Mod Functionality
//      - { Corpse } - Added Features
//      - { Corpse x Curios API Compat } - Added Features
//      - { Create } - Mod Functionality
//      - { Create Better FPS } - Mod Functionality
//      - { Create Crafts & Additions } - Mod Functionality
//      - { Create Mechanical Extruder } - Mod Functionality
//      - { Create: Aquatic Ambitions } - Mod Functionality
//      - { Create: Connected } - Mod Functionality
//      - { Curios API (Forge/NeoForge) } - Added Features
//      - { Distant Horizons: A Level of Detail mod } - Added Features
//      - { Embeddium } - Mod Functionality
//      - { EMI } - Accessibility
//      - { Just Enough Items (JEI) } - Accessibility
//      - { KubeJS } - Core Code
//      - { KubeJS Create } - Core Code
//      - { Mantle } - Compatibility
//      - { Mouse Tweaks } - Added Features
//      - { Oculus } - Mod Functionality
//      - { Patchouli } - Guidebook Functionality
//      - { Rhino } - Mod Functionality
//      - { Sophisticated Backpacks } - Added Features
//      - { Sophisticated Core } - Sophisticated Backpacks
//      - { Tinkers Construct } - Added Features



StartupEvents.registry('item', event => {
    
    // Stone Pebble (Cobble-derivative pseudo-currency for Stage 1)
    event.create('architect:stone_pebble')
        .displayName('Stone Pebble')
        .texture('layer0', 'minecraft:item/iron_nugget')
        .color(0, '#919191')

    // Sparker (stepping stone to easier Flint&Steel)
    event.create('architect:sparker')
        .displayName('Sparker')
        .texture('layer0', 'minecraft:item/flint_and_steel')
        .color(0, '#919191')

    // Diamond Chunk (stepping stone to crafting Diamonds)
    event.create('architect:diamond_chunk')
        .displayName('Diamond Chunk')
        .texture('layer0', 'minecraft:item/amethyst_shard')
        .color(0, '#5decf5')

    // Iron Apple
    event.create('architect:iron_apple')
        .displayName('Granny Ironsmith')
        .texture('layer0', 'minecraft:item/golden_apple')
        .color(0, '#5decf5')
        .food(food => {
            food.hunger(6)
            food.saturation(0.8)
        })
        .rarity('uncommon')

    // Diamond Apple
    event.create('architect:diamond_apple')
        .displayName('Blue Dia-licious')
        .texture('layer0', 'minecraft:item/apple')
        .color(0, '#5decf5')
        .glow(true)
        .food(food => {
            food.hunger(10)
            food.saturation(1.2)
        })
        .rarity('rare')

    // Enchanting Runes Color Code
    const exp = '#55ff55'
    const sculk = '#012a39'
    const diamond = '#55ffff'
    const obsidian = '#211338'
    const phantom = '#135589'
    const redstone = '#a4231c'
    const end = '#e3cba5'
    const vine = '#48b518'
    const gravel = '#4a444b'
    const prismarine = '#117777'
    const sugar = '#f8f0eb'
    const magma = '#5c0e0e'
    const oak = '#896727'
    const gold = '#ffaa00'

    // Plastic Bar
    event.create('architect:plastic_bar')
        .displayName('Plastic Bar')
        .texture('layer0', 'minecraft:item/iron_ingot')
        .color(0, end)

    // Plastic Bit
    event.create('architect:plastic_bit')
        .displayName('Plastic Bit')
        .texture('layer0', 'minecraft:item/iron_nugget')
        .color(0, end)

    // Plastic Sheet
    event.create('architect:plastic_sheet')
        .displayName('Plastic Sheet')
        .texture('layer0', 'create:item/iron_sheet')
        .color(0, end)

    // Blank Disc
    event.create('architect:blank_disc')
        .displayName('Blank Disc')
        .texture('layer0', 'minecraft:item/music_disc_13')
        .color(0, end)

    // Null Rune (stepping stone to crafting Enchanted Books)
    event.create('architect:null_rune')
        .displayName('Null Rune')
        .tooltip(
            Component.gray('Contains the ')
            .append(Component.white('????????').obfuscated(true))
            .append(Component.gray(' enchantment').obfuscated(false))
        )
        .texture('layer0', 'minecraft:item/ender_eye')
        .texture('layer1', 'minecraft:item/nether_star')
        .color(0, phantom)
        .color(1, obsidian)
        .glow(true)

    const enchRune = (registry, display, tooltip, color0, color1) => 
        event.create(registry)
            .displayName(display)
            .tooltip(
                Component.gray('Contains the ')
                .append(Component.white(tooltip))
                .append(Component.gray(' enchantment.'))
            )
            .texture('layer0', 'minecraft:item/ender_eye')
            .texture('layer1', 'minecraft:item/nether_star')
            .color(0, color0)
            .color(1, color1)
            .glow(true)

    const enchCurse = (registry, display, tooltip, color0, color1) => 
        event.create(registry)
            .displayName(display)
            .tooltip(
                Component.gray('Contains the ')
                .append(Component.white(tooltip))
                .append(Component.gray(' curse.'))
            )
            .texture('layer0', 'minecraft:item/ender_eye')
            .texture('layer1', 'minecraft:item/nether_star')
            .color(0, color0)
            .color(1, color1)
            .glow(true)

        
            // Universal Runes
    enchRune('architect:bandage_rune', 'Bandage Rune', 'Mending', exp, sculk)
    enchRune('architect:durable_rune', 'Durable Rune', 'Unbreaking', diamond, obsidian)
    enchCurse('architect:shadow_rune', 'Shadow Rune', 'Vanishing', phantom, obsidian)
            // Armor Runes
    enchRune('architect:dolphin_rune', 'Dolphin Rune', 'Aqua Affinity', prismarine, redstone)
    enchRune('architect:creeper_rune', 'Creeper Rune', 'Blast Protection', obsidian, end)
    enchCurse('architect:bound_rune', 'Bound Rune', 'Binding', vine, gravel)
    enchRune('architect:fathoms_rune', 'Fathoms Rune', 'Depth Strider', prismarine, sugar)
    enchRune('architect:stumble_rune', 'Stumble Rune', 'Feather Falling', sugar, phantom)
    enchRune('architect:blaze_rune', 'Blaze Rune', 'Fire Protection', obsidian, magma)
    enchRune('architect:winter_rune', 'Winter Rune', 'Frost Walker', sugar, prismarine)
    enchRune('architect:deflect_rune', 'Deflect Rune', 'Projectile Protection', obsidian, oak)
    enchRune('architect:protect_rune', 'Protect Rune', 'Protection', obsidian, phantom)
    enchRune('architect:gills_rune', 'Gills Rune', 'Respiration', prismarine, oak)
    enchRune('architect:soul_rune', 'Soul Rune', 'Soul Speed', redstone, sugar)
    enchRune('architect:rose_rune', 'Rose Rune', 'Thorns', vine, oak)
    enchRune('architect:stealth_rune', 'Stealth Rune', 'Swift Sneak', sugar, gravel)
            // Melee Weapon Runes
    enchRune('architect:spider_rune', 'Spider Rune', 'Bane of Arthropods', prismarine, end)
    enchRune('architect:forge_rune', 'Forge Rune', 'Fire Aspect', redstone, gravel)
    enchRune('architect:thief_rune', 'Thief Rune', 'Looting', exp, diamond)
    enchRune('architect:rejection_rune', 'Rejection Rune', 'Knockback', end, oak)
    enchRune('architect:cutting_rune', 'Cutting Rune', 'Sharpness', end, gravel)
    enchRune('architect:holy_rune', 'Holy Rune', 'Smite', end, diamond)
    enchRune('architect:cleave_rune', 'Cleave Rune', 'Sweeping Edge', end, phantom)
            // Ranged Weapon Runes
    enchRune('architect:storm_rune', 'Storm Rune', 'Channeling', prismarine, gold)
    enchRune('architect:starshot_rune', 'Starshot Rune', 'Flame', oak, redstone)
    enchRune('architect:drowned_rune', 'Drowned Rune', 'Impaling', prismarine, gravel)
    enchRune('architect:quiver_rune', 'Quiver Rune', 'Infinity', gravel, oak)
    enchRune('architect:loyal_rune', 'Loyal Rune', 'Loyalty', diamond, vine)
    enchRune('architect:geyser_rune', 'Geyser Rune', 'Riptide', end, prismarine)
    enchRune('architect:splitting_rune', 'Splitting Rune', 'Multishot', oak, phantom)
    enchRune('architect:lineup_rune', 'Lineup Rune', 'Piercing', oak, gravel)
    enchRune('architect:strength_rune', 'Strength Rune', 'Power', oak, end)
    enchRune('architect:distance_rune', 'Distance Rune', 'Punch', oak, redstone)
    enchRune('architect:reload_rune', 'Reload Rune', 'Quick Charge', sugar, gold)
            // Tool Runes
    enchRune('architect:speed_rune', 'Speed Rune', 'Efficiency', gravel, sugar)
    enchRune('architect:diamond_rune', 'Diamond Rune', 'Fortune', exp, diamond)
    enchRune('architect:boot_rune', 'Boot Rune', 'Luck of the Sea', vine, prismarine)
    enchRune('architect:shell_rune', 'Shell Rune', 'Lure', vine, diamond)
    enchRune('architect:block_rune', 'Block Rune', 'Silk Touch', sugar, gold)

            // Spawn Egg Templates
    const spawnEgg = (registry, display, tier, color0, color1) =>
        event.create(registry)
            .displayName(display)
            .tooltip(
                Component.gray('Useful for making ')
                .append(Component.white(tier))
                .append(Component.gray(' Spawn Eggs.'))
            )
            .texture('layer0', 'minecraft:item/spawn_egg')
            .texture('layer1', 'minecraft:item/spawn_egg_overlay')
            .color(0, color0)
            .color(1, color1)

    spawnEgg('architect:basic_spawn_egg', 'Basic Spawn Egg', 'Peaceful', '#e0f7fa', '#00bcd4')
    spawnEgg('architect:lesser_spawn_egg', 'Lesser Spawn Egg', 'Hostile', '#37474f', '#bf360c')
    spawnEgg('architect:greater_spawn_egg', 'Greater Spawn Egg', 'Boss', '#311b92', '#ffd700')

    event.create('architect:genesis_tear')
        .displayName('Reality Tear')
        .texture('layer0', 'minecraft:item/ghast_tear')
        .color(0, '#000000')
        .glow(true)

    event.create('architect:genesis_star')
        .displayName('Empty Star')
        .texture('layer0', 'minecraft:item/nether_star')
        .color(0, '#069606')

    const createFlowerArmor = (id, type, displayName, maxDurability) => {
        event.create(`architect:${id}`, type)
            .displayName(displayName)
            .tier('leather')
            .texture('layer0', 'minecraft:item/leather_' + type)
            .texture('layer1', 'minecraft:item/leather_' + type + '_overlay')
            .color(0, '#c15bdb')
            .glow(true)
            .maxDamage(maxDurability)
    }

    createFlowerArmor('flower_crown', 'helmet', 'Flower Crown', 33)
    createFlowerArmor('flower_tunic', 'chestplate', 'Flower Tunic', 48)
    createFlowerArmor('flower_leggings', 'leggings', 'Flower Leggings', 45)
    createFlowerArmor('flower_boots', 'boots', 'Flower Boots', 39)

    event.create('architect:ender_arm', 'sword')
        .displayName('Ender Arm')
        .tier('iron')
        .texture('layer0', 'minecraft:item/iron_sword')
        .color(0, '#032620')
        .glow(true)
        .modifyAttribute('minecraft:generic.attack_speed', 'ender_slash', 1.4, 'addition')


    event.create('architect:ender_hand', 'pickaxe')
        .displayName('Ender Hand')
        .tier('diamond')
        .texture('layer0', 'minecraft:item/iron_pickaxe')
        .color(0, '#032620')
        .glow(true)
        .modifyTier(tier => {
            tier.speed = 14.0
            tier.level = 5
        })
    })

StartupEvents.registry('block', event => {
    event.create('architect:genesis_block')
        .displayName('Genesis Egg')
        .textureAll('minecraft:block/gilded_blackstone')
        .color('#6930c5')
        .soundType('amethyst')
        .mapColor('gold')
        .hardness(5.0)
        .resistance(10.0)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:mineable/axe')
        .tagBlock('minecraft:needs_netherite_tool')
        .lightLevel(0.8)
})
