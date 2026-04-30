//      Modlist and Tags

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

ServerEvents.tags('item', event => {
    
    // Raw Meat
    event.add('architect:raw_meat', [
        'minecraft:beef',
        'minecraft:porkchop',
        'minecraft:chicken',
        'minecraft:mutton',
        'minecraft:rabbit'
    ])

    // Raw Fish
    event.add('architect:raw_fish', [
        'minecraft:cod',
        'minecraft:salmon'
    ])

    // Cooked Meat
    event.add('architect:cooked_meat', [
        'minecraft:cooked_beef',
        'minecraft:cooked_porkchop',
        'minecraft:cooked_chicken',
        'minecraft:cooked_mutton',
        'minecraft:cooked_rabbit'
    ])

    // Cooked Fish
    event.add('architect:cooked_fish', [
        'minecraft:cooked_cod',
        'minecraft:cooked_salmon'
    ])

    // Seeds
    event.add('architect:seeds', [
        'minecraft:wheat_seeds',
        'minecraft:pumpkin_seeds',
        'minecraft:melon_seeds',
        'minecraft:beetroot_seeds',
        'minecraft:torchflower_seeds',
    ])

    // Crops
    event.add('architect:crops', [
        'minecraft:wheat',
        'minecraft:pumpkin',
        'minecraft:melon',
        'minecraft:beetroot',
        'minecraft:carrot',
        'minecraft:potato',
        'minecraft:torchflower',
        'minecraft:red_mushroom',
        'minecraft:brown_mushroom',
    ])

    // Dyes
    event.add('architect:dyes', [
        'minecraft:white_dye',
        'minecraft:light_gray_dye',
        'minecraft:gray_dye',
        'minecraft:black_dye',
        'minecraft:brown_dye',
        'minecraft:red_dye',
        'minecraft:orange_dye',
        'minecraft:yellow_dye',
        'minecraft:lime_dye',
        'minecraft:green_dye',
        'minecraft:cyan_dye',
        'minecraft:light_blue_dye',
        'minecraft:blue_dye',
        'minecraft:purple_dye',
        'minecraft:magenta_dye',
        'minecraft:pink_dye',
    ])

        // Universal Runes
    event.add('architect:runes_univ', [
        'architect:null_rune',
        'architect:bandage_rune',
        'architect:durable_rune',
    ])

    // Armor Runes
    event.add('architect:runes_armor', [
        'architect:dolphin_rune',
        'architect:creeper_rune',
        'architect:fathoms_rune',
        'architect:stumble_rune',
        'architect:blaze_rune',
        'architect:winter_rune',
        'architect:deflect_rune',
        'architect:protect_rune',
        'architect:gills_rune',
        'architect:soul_rune',
        'architect:rose_rune',
        'architect:stealth_rune'
    ])

    // Melee Weapon Runes
    event.add('architect:runes_melee', [
        'architect:spider_rune',
        'architect:forge_rune',
        'architect:thief_rune',
        'architect:rejection_rune',
        'architect:cutting_rune',
        'architect:holy_rune',
        'architect:cleave_rune'
    ])

    // Ranged Weapon Runes
    event.add('architect:runes_ranged', [
        'architect:storm_rune',
        'architect:starshot_rune',
        'architect:drowned_rune',
        'architect:quiver_rune',
        'architect:loyal_rune',
        'architect:geyser_rune',
        'architect:splitting_rune',
        'architect:lineup_rune',
        'architect:strength_rune',
        'architect:distance_rune',
        'architect:reload_rune'
    ])

    // Tool Runes
    event.add('architect:runes_tool', [
        'architect:speed_rune',
        'architect:diamond_rune',
        'architect:boot_rune',
        'architect:shell_rune',
        'architect:block_rune'
    ])

    // Curses
    event.add('architect:runes_curse', [
        'architect:bound_rune',
        'architect:shadow_rune'
    ])

    // All Runes
    event.add('architect:runes_all', [
        '#architect:runes_univ',
        '#architect:runes_armor',
        '#architect:runes_melee',
        '#architect:runes_ranged',
        '#architect:runes_tool',
        '#architect:runes_curse'
    ])

        // Ages of Existence
    event.add('architect:all_ages', [
        '#architect:stone_age',
        '#architect:biology_age',
        '#architect:industry_age',
        '#architect:spawn_age',
        '#architect:magic_age',
        '#architect:music_age',
        '#architect:genesis_age'
    ])

    // Age 1
    event.add('architect:stone_age', [
        'architect:stone_pebble', 'architect:sparker',
        'minecraft:stick', 'minecraft:oak_planks', 'minecraft:sand', 
        'minecraft:dirt', 'minecraft:pointed_dripstone', 'minecraft:andesite', 
        'minecraft:iron_nugget', 'minecraft:flint_and_steel', 'minecraft:coal', 
        'minecraft:charcoal', 'minecraft:coal_block', 'minecraft:granite', 
        'minecraft:diorite', 'create:ochrum', 'create:veridium', 'create:asurine', 
        'create:crimsite','minecraft:gravel', 'minecraft:gold_nugget', 
        'create:copper_nugget', 'create:zinc_nugget'
    ])
    
    // Age 2
    event.add('architect:biology_age', [
        'minecraft:oak_sapling', 'minecraft:oak_leaves', 'minecraft:oak_log',
        'minecraft:wheat_seeds', 'minecraft:beetroot_seeds', 'minecraft:pumpkin_seeds',
        'minecraft:melon_seeds', 'minecraft:potato', 'minecraft:carrot',
        'minecraft:cactus', '#architect:dyes', 'minecraft:sugar_cane', 'minecraft:paper',
        'minecraft:slime_ball', 'minecraft:honey_block', 'minecraft:magma_cream',
        'minecraft:water_bucket', 'minecraft:string', 'minecraft:feather',
        'minecraft:egg', 'minecraft:kelp', 'minecraft:grass_block', 
        'minecraft:moss_block', 'minecraft:small_dripleaf', 'minecraft:red_mushroom',
        'minecraft:red_mushroom_block', 'minecraft:brown_mushroom',
        'minecraft:brown_mushroom_block', 'minecraft:wet_sponge', 
        'minecraft:rotten_flesh', 'minecraft:leather', 'minecraft:saddle', 
        'minecraft:porkchop', 'minecraft:bone', 'minecraft:calcite', 
        'minecraft:nautilus_shell', 'minecraft:phantom_membrane',
        'minecraft:sculk_catalyst'
    ])

    // Age 3
    event.add('architect:industry_age', [
        'minecraft:lava_bucket', 'minecraft:blaze_rod', 'minecraft:magma_block', 
        'minecraft:soul_sand', 'minecraft:netherrack', 'minecraft:nether_wart', 
        'minecraft:chorus_fruit', 'minecraft:diamond_chunk', 'minecraft:diamond', 
        'minecraft:blaze_burner', 'minecraft:lapis_lazuli', 'minecraft:lapis_block', 
        'minecraft:redstone', 'minecraft:deepslate', 'minecraft:glowstone_dust', 
        'minecraft:gilded_blackstone', 'minecraft:end_stone', 'minecraft:emerald', 
        'minecraft:emerald_block', 'minecraft:ender_pearl', 'minecraft:end_portal_frame', 
        'minecraft:ghast_tear', 'minecraft:elytra', 'minecraft:netherite_scrap'
    ])

    // Age 4
    const basicEggs = [
        { mob: 'allay'}, { mob: 'axolotl'}, { mob: 'bat'},
        { mob: 'bee'}, { mob: 'camel'}, { mob: 'cat'},
        { mob: 'chicken'}, { mob: 'cod'}, { mob: 'cow'},
        { mob: 'donkey'}, { mob: 'fox'}, { mob: 'frog'},
        { mob: 'glow_squid'}, { mob: 'goat'}, { mob: 'horse'},
        { mob: 'llama'}, { mob: 'mooshroom'}, { mob: 'mule'},
        { mob: 'ocelot'}, { mob: 'panda'}, { mob: 'parrot'},
        { mob: 'pig'}, { mob: 'pufferfish'},
        { mob: 'rabbit'}, { mob: 'salmon'}, { mob: 'sheep'},
        { mob: 'silverfish'}, { mob: 'squid'},
        { mob: 'tadpole'}, { mob: 'trader_llama'}, { mob: 'tropical_fish'},
        { mob: 'turtle'}, { mob: 'wolf'}
    ]

    const lesserEggs = [
        { mob: 'blaze'}, { mob: 'cave_spider'}, { mob: 'creeper'},
        { mob: 'drowned'}, { mob: 'enderman'}, { mob: 'endermite'},
        { mob: 'evoker'}, { mob: 'ghast'}, { mob: 'guardian'},
        { mob: 'hoglin'}, { mob: 'husk'}, { mob: 'phantom'},
        { mob: 'piglin'}, { mob: 'piglin_brute'}, { mob: 'pillager'},
        { mob: 'polar_bear'}, { mob: 'ravager'}, { mob: 'shulker'}, 
        { mob: 'skeleton'}, { mob: 'skeleton_horse'}, { mob: 'slime'}, 
        { mob: 'sniffer'}, { mob: 'snow_golem'}, { mob: 'spider'}, { mob: 'stray'}, 
        { mob: 'strider'}, { mob: 'vex'}, { mob: 'vindicator'},
        { mob: 'wandering_trader'}, { mob: 'witch'}, { mob: 'zoglin'},
        { mob: 'zombie'}, { mob: 'zombie_horse'}, { mob: 'zombie_villager'},
        { mob: 'zombified_piglin'}
    ]

    const greaterEggs = [
        { mob: 'elder_guardian'}, { mob: 'magma_cube'}, { mob: 'villager'},
        { mob: 'warden'}, { mob: 'wither_skeleton'},
    ]

    basicEggs.forEach(egg => 
        event.add('architect:basic_eggs', `minecraft:${egg.mob}_spawn_egg`)
    )

    lesserEggs.forEach(egg =>
        event.add('architect:lesser_eggs', `minecraft:${egg.mob}_spawn_egg`)
    )

    greaterEggs.forEach(egg =>
        event.add('architect:greater_eggs', `minecraft:${egg.mob}_spawn_egg`)
    )

    event.add('architect:spawn_age', [ 
        'architect:basic_spawn_egg', 'architect:lesser_spawn_egg', 'architect:greater_spawn_egg',
        '#architect:basic_eggs', '#architect:lesser_eggs', '#architect:greater_eggs'
    ]) 

    // Age 5
    event.add('architect:magic_age', [
        '#architect:runes_all', 'minecraft:book',
        'minecraft:enchanted_book', '#minecraft:trim_templates'
    ])

    // Age 5.5
    event.add('architect:music_age', [
        'architect:plastic_bar', 'architect:plastic_bit', 'architect:blank_disc',
        'minecraft:disc_fragment_5', 'minecraft:music_disc_13', 
        'minecraft:music_disc_cat', 'minecraft:music_disc_blocks', 
        'minecraft:music_disc_chirp', 'minecraft:music_disc_far', 
        'minecraft:music_disc_mall', 'minecraft:music_disc_mellohi', 
        'minecraft:music_disc_stal', 'minecraft:music_disc_strad', 
        'minecraft:music_disc_ward', 'minecraft:music_disc_11', 
        'minecraft:music_disc_wait', 'minecraft:music_disc_otherside', 
        'minecraft:music_disc_pigstep', 'minecraft:music_disc_relic', 
        'minecraft:music_disc_5'
    ])

    // Age 6
    event.add('architect:genesis_age', [
        'architect:reality_tear', 'architect:genesis_block'
    ])
})