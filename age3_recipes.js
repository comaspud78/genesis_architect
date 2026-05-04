// Age 3 Recipes
// Industry

ServerEvents.recipes(event => {

        // 1000mb Lava
    event.recipes.create.mixing([Fluid.lava(1000)], [
            '4x #minecraft:coals',
            '4x minecraft:cobblestone',
            'minecraft:flint_and_steel'
    ])
    
    // 1x Blaze Rod
    event.recipes.create.compacting('minecraft:blaze_rod', [
        'createaddition:iron_rod',
        Fluid.lava(1000)
    ])

    // 3x Magma Block
    event.recipes.create.mixing('3x minecraft:magma_block', [
        '3x minecraft:stone',
        Fluid.lava(1000)
    ])

    // 1x Soul Sand
    event.shapeless('minecraft:soul_sand', [
        'minecraft:sand',
        'minecraft:bone_meal',
        'minecraft:bone_meal',
        'minecraft:lava_bucket'
    ]).replaceIngredient('minecraft:lava_bucket', 'minecraft:bucket')

    // 3x Soul Sand
    event.recipes.create.mixing('3x minecraft:soul_sand', [
        '2x minecraft:sand', 
        '3x minecraft:bone_meal',
    ]).heated()

    // 10x Soul Sand
    event.recipes.create.mixing('10x minecraft:soul_sand', [
        '4x minecraft:sand', 
        'minecraft:bone_meal',
        'minecraft:lapis_lazuli'
    ]).heated()

    // 1x Netherrack
    event.recipes.create.haunting('minecraft:netherrack', ['minecraft:stone'])

    // 1x Nether Wart
    event.recipes.create.haunting('minecraft:nether_wart', ['minecraft:red_mushroom'])

    // Chorus Fruit
    event.recipes.create.haunting('minecraft:chorus_fruit', ['minecraft:apple'])

    // 1 Diamond Chunk + 3 Coal + 25% for 1 Diamond Chunk
    // + 10% for 1 Diamond Chunk
    event.recipes.create.compacting([
        'architect:diamond_chunk',
        '3x minecraft:coal',
        Item.of('architect:diamond_chunk').withChance(0.25),
        Item.of('architect:diamond_chunk').withChance(0.10)
        ], [
            'minecraft:coal_block',
            Fluid.lava(1000)
    ])

    // 2x Diamond Chunk + 3x Coal + 50% for 1x Diamond Chunk
    // + 25% for 1x Diamond Chunk
    event.recipes.create.compacting([
        '2x architect:diamond_chunk',
        '3x minecraft:coal',
        Item.of('architect:diamond_chunk').withChance(0.50),
        Item.of('architect:diamond_chunk').withChance(0.25)
        ], [
            'minecraft:coal_block',
    ]).heated()

    // 3x Diamond Chunk + 3x Coal + 25% for 2x Diamond Chunk
    // + 10% for 1x Diamond Chunk
    event.recipes.create.compacting([
        '3x architect:diamond_chunk',
        '3x minecraft:coal',
        Item.of('architect:diamond_chunk', 2).withChance(0.25),
        Item.of('architect:diamond_chunk').withChance(0.10)
        ], [
            'minecraft:coal_block',
    ]).superheated()

    // 1x Diamond
    event.recipes.create.compacting('minecraft:diamond', [
        '9x architect:diamond_chunk'
    ])

    // Iron Horse Armor
    event.recipes.create.sequenced_assembly([ 'minecraft:iron_horse_armor'],
        'minecraft:leather_horse_armor', [
            event.recipes.create.deploying('minecraft:leather_horse_armor', [
                'minecraft:leather_horse_armor',
                'minecraft:iron_ingot'
            ])
        ]
    ).transitionalItem('minecraft:leather_horse_armor').loops(7)

    // Golden Horse Armor
    event.recipes.create.sequenced_assembly([ 'minecraft:golden_horse_armor'],
        'minecraft:iron_horse_armor', [
            event.recipes.create.deploying('minecraft:iron_horse_armor', [
                'minecraft:iron_horse_armor',
                'minecraft:gold_ingot'
            ])
        ]
    ).transitionalItem('minecraft:iron_horse_armor').loops(7)

    // Diamond Horse Armor
    event.recipes.create.sequenced_assembly([ 'minecraft:diamond_horse_armor'],
        'minecraft:golden_horse_armor', [
            event.recipes.create.deploying('minecraft:golden_horse_armor', [
                'minecraft:golden_horse_armor',
                'minecraft:diamond'
            ])
        ]
    ).transitionalItem('minecraft:golden_horse_armor').loops(7)

    // Bell
    event.shaped('minecraft:bell', [
        ' S ',
        'GGG',
        'G G'
    ], {
        S: 'create:shaft',
        G: 'create:golden_sheet'
    })

    // 1x Amethyst Shard
    event.recipes.create.haunting('minecraft:amethyst_shard', [
        'architect:diamond_chunk'
    ])

    // 1x Budding Amethyst
    event.shaped('minecraft:budding_amethyst', [
        'SSS',
        'LAL',
        'SSS'
    ], {
        S: 'minecraft:amethyst_shard',
        L: 'minecraft:lapis_lazuli',
        A: 'minecraft:amethyst_block'
    })

    // Echo Shard
    event.recipes.create.deploying('minecraft:echo_shard', [
        'minecraft:amethyst_shard',
        'minecraft:sculk_vein'
    ])

    // 1x Blaze Burner
    event.shaped('create:blaze_burner', [
        'DRI',
        'RBR',
        'IRD'
    ], {
        D: 'architect:diamond_chunk',
        R: 'minecraft:blaze_rod',
        I: 'createaddition:iron_rod',
        B: 'create:empty_blaze_burner'
    })

    event.shapeless('create:blaze_burner', [
        'create:empty_blaze_burner',
        'minecraft:blaze_spawn_egg'
    ])

    // 1x Lapis Lazuli
    event.recipes.create.mixing('minecraft:lapis_lazuli', [
        'minecraft:blue_dye',
        'minecraft:bone_meal',
        'minecraft:gold_nugget',
        'minecraft:gold_nugget'
    ]).heated()

    // 1x Lapis Block
    event.recipes.create.mixing('minecraft:lapis_block', [
        'minecraft:blue_dye',
        'minecraft:blue_dye',
        'minecraft:calcite',
        'minecraft:gold_ingot',
        'minecraft:gold_ingot'
    ])

    // 1x Redstone
    event.shapeless('minecraft:redstone', [
        'minecraft:gravel', 
        'minecraft:red_dye',
        'minecraft:lapis_lazuli'
    ])

    // 1x Deepslate
    event.recipes.create.compacting('minecraft:deepslate', [
        Item.of('minecraft:stone', 8),
        'minecraft:redstone'
    ])

    // 2x Glowstone Dust
    event.recipes.create.mixing('2x minecraft:glowstone_dust', [
        Item.of('minecraft:sugar', 4),
        'minecraft:torch'
    ]).heated()

    // 2x Glowstone Dust (alternate)
    event.recipes.create.mixing('2x minecraft:glowstone_dust', [
        Item.of('minecraft:redstone', 4),
        'minecraft:gold_nugget'
    ]).heated()

    // 2x Glowstone Dust (alternate)
    event.recipes.create.mixing('4x minecraft:glowstone_dust', [
        Item.of('minecraft:quartz', 4),
        'minecraft:gold_nugget'
    ]).heated()

    // 1x Gilded Blackstone
    event.shaped('minecraft:gilded_blackstone', [
        'BG',
        'G '
    ], {
        B: 'minecraft:blackstone',
        G: 'minecraft:gold_ingot'
    })
    
    // 1x End Stone
    event.shaped('minecraft:end_stone', [
        'GGG',
        'GDG',
        'GGG'
    ], {
        G: 'minecraft:glowstone_dust',
        D: 'minecraft:diorite'
    })

    // 1x Emerald
    event.shaped('minecraft:emerald', [
        ' C ',
        'CLC',
        ' CC'
    ], {
        C: 'create:copper_nugget',
        L: 'minecraft:lapis_lazuli'
    })

    // 1x Emerald Block
    event.recipes.create.mixing('minecraft:emerald_block', [
        'minecraft:copper_ingot',
        'minecraft:lapis_block'
    ])

    
    // 1x Ender Pearl
    const enderBase = ['minecraft:obsidian', 'minecraft:end_stone_bricks']
    const enderClyst = ['minecraft:lapis_lazuli', 'minecraft:chorus_fruit']
    
    enderBase.forEach(base => {
        enderClyst.forEach(catalyst => {
            event.recipes.create.compacting('minecraft:ender_pearl', [
                Item.of(base, 8),
                Item.of(catalyst, 8)
            ]).heated()
        })
    })

    // 1x End Portal Frame
    event.recipes.create.mechanical_crafting('minecraft:end_portal_frame', [
        ' EOE ',
        'EPOPE',
        'SPOPS',
        'SSSSS',
        ' SSS '
    ], { 
        E: 'minecraft:ender_eye',
        O: 'minecraft:obsidian',
        P: 'minecraft:ender_pearl',
        S: 'minecraft:end_stone'
    })

    // 1x Ghast Tear
    event.recipes.create.mixing('minecraft:ghast_tear', [
        'minecraft:quartz',
        'minecraft:pufferfish',
        Fluid.lava(1000)
    ]).superheated()

    // 1x Elytra
    event.shaped('minecraft:elytra', [
        'GPG',
        'PSP',
        'P P'
    ], {
        G: 'minecraft:ghast_tear',
        P: 'minecraft:phantom_membrane',
        S: 'minecraft:string'
    })

    // 1x Netherite Scrap
    event.recipes.create.compacting('minecraft:netherite_scrap', [
        Item.of('minecraft:blaze_rod', 4),
        Item.of('minecraft:ender_pearl', 4),
        Item.of('minecraft:ghast_tear', 4),
        Item.of('minecraft:soul_sand', 4)
    ]).superheated()

})
