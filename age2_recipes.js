// Age 2 Recipes

ServerEvents.recipes(event => {

    const treeTypes = [
        { type: 'oak'}, 
        { type: 'spruce', dye: 'brown'},
        { type: 'birch', dye: 'white'},
        { type: 'jungle', dye: 'green'},
        { type: 'acacia', dye: 'orange'}, 
        { type: 'dark_oak', dye: 'black'},
        { type: 'cherry', dye: 'pink'}
    ]

    treeTypes.forEach(tree => {

        event.shapeless(`3x minecraft:${tree.type}_leaves`, [
            `minecraft:${tree.type}_sapling`
        ]).replaceIngredient(`minecraft:${tree.type}_sapling`, 'minecraft:stick')

        event.recipes.create.splashing([
            `3x minecraft:${tree.type}_leaves`,
            'minecraft:stick',
            Item.of(`minecraft:${tree.type}_leaves`, 2).withChance(0.20)
        ], `minecraft:${tree.type}_sapling`)

        event.shaped(`minecraft:${tree.type}_planks`, [
            'S',
            'S'
        ], {
            S: `minecraft:${tree.type}_slab`
        })

        if (tree.dye) {
            event.shapeless(`minecraft:${tree.type}_sapling`, [
                'minecraft:oak_sapling',
                `minecraft:${tree.dye}_dye`
            ])

            event.shapeless(`minecraft:${tree.type}_log`, [
                'minecraft:oak_log',
                `minecraft:${tree.dye}_dye`
            ])
        }
    })

    // 1x Oak Sapling
    event.shaped('minecraft:oak_sapling', [
        ' S ',
        'SSS',
        ' D '
    ], {
        S: 'minecraft:stick',
        D: 'minecraft:dirt'
    })

    // 1x Mangrove Propagule
    event.shapeless('minecraft:mangrove_propagule', [
        'minecraft:oak_sapling',
        'minecraft:red_dye'
    ])

    // 1x Oak Log
    event.shaped('minecraft:oak_log', [
        ' S ',
        'SDS',
        ' S '
    ], {
        S: 'minecraft:stick', 
        D: 'minecraft:dirt'
    })

    // 1x Mangrove Log
    event.shapeless('minecraft:mangrove_log', [
        'minecraft:oak_log',
        'minecraft:red_dye'
    ])

    // 1x Wheat Seeds
    event.shaped('minecraft:wheat_seeds', [
        'PPP',
        'PPP'
    ], { P: 'architect:stone_pebble' })

    // 1x Beetroot Seeds
    event.shapeless('minecraft:beetroot_seeds', [
        'minecraft:wheat_seeds',
        'minecraft:white_dye'
    ])

    // 1x Pumpkin Seeds
    event.shapeless('minecraft:pumpkin_seeds', [
        'minecraft:wheat_seeds',
        'minecraft:orange_dye'
    ])

    // 1x Melon Seeds
    event.shapeless('minecraft:melon_seeds', [
        'minecraft:wheat_seeds',
        'minecraft:green_dye'
    ])

    // 1x Apple
    event.shaped('minecraft:apple', [
        'RTR',
        'RSR',
        'RRR'        
    ], {
        R: 'minecraft:red_dye',
        T: 'minecraft:stick',
        S: 'minecraft:wheat_seeds'
    })

    // 1x Granny Ironsmith
    event.shaped('architect:iron_apple', [
        'NRN',
        'NAN',
        'NNN'
    ], {
        N: 'minecraft:iron_nugget',
        R: 'createaddition:iron_rod',
        A: 'minecraft:apple'
    })

    // 1x Blue Dia-licious
    event.recipes.create.compacting('architect:diamond_apple', [
        '7x minecraft:diamond',
        'createaddition:brass_rod',
        'architect:iron_apple'
    ])

    // 3x Potato
    event.shapeless('3x minecraft:potato', [
        'minecraft:brown_dye',
        'minecraft:brown_dye',
        'architect:stone_pebble',
        'architect:stone_pebble',
        'architect:stone_pebble'
    ])

    // 3x Carrot
    event.shaped('3x minecraft:carrot', [
        ' L ',
        'STS',
        ' P '
    ], {
        L: 'minecraft:oak_leaves',
        S: 'minecraft:wheat_seeds',
        T: 'minecraft:stick',
        P: 'minecraft:pointed_dripstone'
    })

    // 1x Cactus
    event.shaped('minecraft:cactus', [
        ' P ',
        'PLP',
        ' P '
    ], {
        P: 'minecraft:pointed_dripstone',
        L: '#minecraft:logs'
    })

    // 1x Cocoa Bean
    event.shaped('minecraft:cocoa_beans', [
        'PP',
        'PP',
        'PP'
    ], {
        P: 'architect:stone_pebble'
    })

    // 1x Dandelion
    event.shaped('minecraft:dandelion', [
        'W',
        'S'
    ], {
        W: 'minecraft:wheat',
        S: 'minecraft:stick'
    })

    // 1x Cornflower
    event.shaped('minecraft:cornflower', [
        'B',
        'S'
    ], {
        B: 'minecraft:water_bucket',
        S: 'minecraft:stick'
    }).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')

    // 1x Allium
    event.shaped('minecraft:allium', [
        'C',
        'S'
    ], {
        C: 'minecraft:carrot',
        S: 'minecraft:stick'
    })

    // 1x Sugar Cane
    event.shaped('minecraft:sugar_cane', [
        'S',
        'G',
        'S'
    ], {
        S: 'minecraft:stick',
        G: 'minecraft:green_dye'
    })

    // 1x Bamboo
    event.shaped('minecraft:bamboo', [
        'S',
        'G',
        'B'
    ], {
        S: 'minecraft:sugar_cane',
        G: 'minecraft:green_dye',
        B: 'minecraft:bone_meal'
    })

    // 1x Paper
    event.recipes.create.milling('minecraft:paper', 'minecraft:sugar_cane')

    // 1x Slime Ball
    event.recipes.create.mixing('minecraft:slime_ball', [
        Item.of('minecraft:sugar', 8)
    ]).heated()

    // 1x Honey Block
    event.recipes.create.mixing('minecraft:honey_block', [
        'minecraft:slime_block',
        Item.of('minecraft:sugar', 2),
        'minecraft:blaze_rod'
    ]).heated()

    // 2x Honeycomb
    event.recipes.create.mixing('2x minecraft:honeycomb', [
        'minecraft:honey_block',
        '2x architect:plastic_bit'
    ]).heated()

    // 2x Magma Cream
    event.recipes.create.mixing('2x minecraft:magma_cream', [
        'minecraft:slime_ball',
        'minecraft:milk_bucket',
        Fluid.lava(500)
    ])


    // 1x Water Bucket
    event.shaped('minecraft:water_bucket', [
        'III',
        'ISI',
        ' B '
    ], {
        I: 'minecraft:iron_ingot',
        S: 'minecraft:sugar_cane',
        B: 'minecraft:bucket'
    }).replaceIngredient('minecraft:iron_ingot', 'minecraft:iron_ingot')

    // 1x Grass Block
    event.shaped('minecraft:grass_block', [
        'G',
        'B',
        'D'
    ], {
        G: 'minecraft:green_dye',
        B: 'minecraft:bone_meal',
        D: 'minecraft:dirt'
    })

    // 1x Moss Block
    event.shapeless('minecraft:moss_block', [
        'minecraft:bone_meal',
        'minecraft:grass_block'
    ])

    // 1x Small Dripleaf
    event.shapeless('minecraft:small_dripleaf', [
        'minecraft:bone_meal',
        'minecraft:moss_block'
    ]).replaceIngredient('minecraft:moss_block', 'minecraft:moss_block')
    

    // 8x Dye multiplier
    const colors = [
        'white', 'light_gray', 'gray', 'black', 'brown', 'red',
        'orange', 'yellow', 'lime', 'green', 'cyan', 'light_blue',
        'blue', 'purple', 'magenta', 'pink'
    ]

    colors.forEach(color => {
        event.shapeless(Item.of(`minecraft:${color}_dye`, 4), [
            `minecraft:${color}_dye`,
            'minecraft:water_bucket'
        ]).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')

        event.recipes.create.mixing(Item.of(`minecraft:${color}_dye`, 8), [
            `minecraft:${color}_dye`,
            Fluid.water(1000)
        ])
    })


    // 1x Snow Ball
    event.shaped('minecraft:snowball', [
        'DDD',
        'DBD',
        'DDD'
    ], {
        D: 'minecraft:white_dye',
        B: 'minecraft:water_bucket'
    }).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')

    // 3x String
    event.recipes.create.mixing('3x minecraft:string', 'minecraft:paper')

    // 1x Feather
    event.shaped('minecraft:feather', [
        ' S ',
        'STS',
        ' T '
    ], { 
        S: 'minecraft:string',
        T: 'minecraft:stick'
    })

    // 1x Egg
    event.shaped('minecraft:egg', [
        ' W ',
        'WYW',
        'WWW'
    ], {
        W: 'minecraft:white_dye',
        Y: 'minecraft:yellow_dye'
    })

    // 1x Kelp
    event.recipes.create.mixing('minecraft:kelp', [
        '2x minecraft:string',
        'minecraft:sugar_cane',
        Fluid.water(500)
    ])

    // 1x Red Mushroom
    event.recipes.create.splashing('minecraft:red_mushroom', [
        'minecraft:crimson_fungus'
    ])

    // 3x Red Mushroom
    event.shaped('3x minecraft:red_mushroom', [
        ' R ',
        'RSR',
        ' S '
    ], {
        R: 'minecraft:red_dye',
        S: 'minecraft:stick'
    })

    // 1x Brown Mushroom
    event.recipes.create.splashing('minecraft:brown_mushroom', [
        'minecraft:warped_fungus'
    ])

    // 3x Brown Mushroom
    event.shaped('3x minecraft:brown_mushroom', [
        ' B ',
        'BSB',
        ' S '
    ],{
        B: 'minecraft:brown_dye',
        S: 'minecraft:stick'
    })
    
    // 1x Wet Sponge
    event.shapeless('minecraft:wet_sponge', [
        ['minecraft:brown_mushroom_block', 'minecraft:red_mushroom_block'],
        'minecraft:yellow_dye',
        'minecraft:water_bucket'
    ]).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')


    // 3x Rotten Flesh
    event.shaped('3x minecraft:rotten_flesh', [
        'BRB',
        'RBR',
    ], {
        R: 'minecraft:red_mushroom',
        B: 'minecraft:brown_mushroom'
    })
    event.shaped('3x minecraft:rotten_flesh', [
        'RBR',
        'BRB'
    ], {
        R: 'minecraft:red_mushroom',
        B: 'minecraft:brown_mushroom'
    })

    // 1x Leather
    event.smoking('minecraft:leather', 'minecraft:rotten_flesh')

    // 1x Saddle
    event.shaped('minecraft:saddle', [
        'I L',
        'LLL',
        'T T'
    ], {
        I: 'minecraft:iron_ingot',
        L: 'minecraft:leather',
        T: 'minecraft:tripwire_hook'
    })

    // 1x Porkchop
    event.recipes.create.mixing('minecraft:porkchop', [
        '4x minecraft:rotten_flesh',
        '8x minecraft:sugar',
        Fluid.water(1000)
    ])

    // 1x Beef
    event.shaped('minecraft:beef', [
        ' L ',
        'WPB'
    ], {
        L: 'minecraft:leather',
        W: 'minecraft:white_dye',
        P: 'minecraft:porkchop',
        B: 'minecraft:black_dye'
    })

    // 1x Milk
    event.recipes.create.compacting(Fluid.of('minecraft:milk', 1000), [
        'minecraft:beef',
        'minecraft:bone_meal',
        Fluid.water(1000)
    ]).heated()

    // 1x Bone
    event.shaped('minecraft:bone', [
        'BSB',
        ' S ',
        'BSB'
    ], {
        B: 'minecraft:bone_meal',
        S: 'minecraft:stick'
    })

    // 1x Calcite
    event.shaped('minecraft:calcite', [
        'DBD',
        'BDB',
        'DBD'
    ], {
        D: 'minecraft:diorite',
        B: 'minecraft:bone_meal'
    })

    // 1x Nautilus Shell
    event.shaped('minecraft:nautilus_shell', [
        'BBB',
        'BWC',
        'CCC'
    ], {
        B: 'minecraft:bone_meal',
        W: 'minecraft:white_dye',
        C: 'minecraft:copper_ingot'
    })

    // 1x Phantom Membrane
    event.recipes.create.mixing('minecraft:phantom_membrane', [
        Item.of('minecraft:feather', 3),
        Item.of('minecraft:slime_ball', 2),
        'minecraft:clock'
    ]).heated()

    // 1x Sculk Catalyst
    event.recipes.create.mixing(['minecraft:sculk_catalyst'], [
        'minecraft:end_stone',
        'minecraft:soul_sand',
        'minecraft:redstone',
        'minecraft:amethyst_shard',
    ]).superheated()

    // Flower Crown
    event.shaped('architect:flower_crown', [
        'FFF',
        'F F',
    ], {
        F: '#minecraft:flowers'
    })

    // Flower Tunic
    event.shaped('architect:flower_tunic', [
        'F F',
        'FFF',
        'FFF'
    ], {
        F: '#minecraft:flowers'
    })

    // Flower Leggings
    event.shaped('architect:flower_leggings', [
        'FFF',
        'F F',
        'F F'
    ], {
        F: '#minecraft:flowers'
    })

    // Flower Boots
    event.shaped('architect:flower_boots', [
        'F F',
        'F F'
    ], {
        F: '#minecraft:flowers'
    })

})