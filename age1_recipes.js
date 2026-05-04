// Age 1 Recipes
// Stonework

ServerEvents.recipes(event => {

    // Cobblestone
    event.shaped('minecraft:cobblestone', [
        'PP',
        'PP'
        ], { P: 'architect:stone_pebble' }
    )

    // 3x Stone Pebble
    event.shapeless('3x architect:stone_pebble', ['minecraft:cobblestone'])

    // 6x Stone Pebble
    event.recipes.create.crushing([
        '6x architect:stone_pebble', 
        Item.of('2x architect:stone_pebble').withChance(0.25)
        ], 'minecraft:cobblestone'
    )

    // 1x Sparker
    event.shaped('architect:sparker', [
        'PP',
        'P '
    ], { P: 'architect:stone_pebble' })

    // 1x Stick
    event.shaped('minecraft:stick', [
        'P',
        'P'
    ], { P: 'architect:stone_pebble' })

    // 1x Oak Planks
    event.shaped('minecraft:oak_planks', [
        'SS',
        'SS'
    ], {
        S: 'minecraft:stick'
    })

    // 1x Crafting Station (Tinkers Construct)
    event.remove({output: "tconstruct:crafting_station"})
    event.remove({output: "minecraft:crafting_table"})
    event.shaped('tconstruct:crafting_station', [
        'PP',
        'PP'
    ], {
        P: '#minecraft:planks'
    })
    event.shapeless('minecraft:crafting_table', 'tconstruct:crafting_station')
    event.shapeless('tconstruct:crafting_station', 'minecraft:crafting_table')

    // 1x Sand
    event.recipes.create.milling(
        Item.of('minecraft:sand').withChance(0.25), 
        ['architect:stone_pebble']
    )

    // Suspicious...
    const sus = [ 'sand', 'gravel' ]
    sus.forEach(s => {
        event.recipes.create.mixing(`minecraft:suspicious_${s}`, [
            `minecraft:${s}`,
            'minecraft:brick'
        ]).heated()
    })

    // 1x Dirt
    event.shaped('minecraft:dirt', [
        'PC',
        'CP'
    ], {
        P: 'architect:stone_pebble',
        C: 'minecraft:cobblestone'
    })


    // 1x Pointed Dripstone
    event.shaped('minecraft:pointed_dripstone', [
        'PPP',
        ' P '
    ], { P: 'architect:stone_pebble' })

    // 2x Andesite
    event.shaped('2x minecraft:andesite', [
        'PPP',
        'PCP',
        'PPP'
    ], {
        P: 'architect:stone_pebble',
        C: 'minecraft:cobblestone'
    })

    // 1x Iron Nugget
    event.shaped('minecraft:iron_nugget', [
        'PAP',
        'PPP',
        'PCP'
    ], {
        P: 'architect:stone_pebble',
        A: 'minecraft:andesite',
        C: 'minecraft:cobblestone'
    })

    // 1x Flint & Steel
    event.shapeless('minecraft:flint_and_steel', [
        'architect:sparker',
        'minecraft:iron_nugget',
        'minecraft:iron_nugget',
        'minecraft:iron_nugget',
        'minecraft:iron_nugget'
    ])

    // Coal Block (Charcoal)
    event.remove({output: 'minecraft:coal_block', type: 'crafting'})
    event.shaped('minecraft:coal_block', [
        'CCC',
        'CCC',
        'CCC'
    ], { C: ['minecraft:charcoal', 'minecraft:coal'] })

    // 1x Granite
    event.shaped('minecraft:granite', [
        'R',
        'C',
        'S'
    ], {
        R: 'minecraft:red_dye',
        C: ['minecraft:coal', 'minecraft:charcoal'],
        S: 'minecraft:stone'
    })

    // 1x Diorite
    event.shaped('minecraft:diorite', [
        'W',
        'C',
        'S'
    ], {
        W: 'minecraft:white_dye',
        C: ['minecraft:coal', 'minecraft:charcoal'],
        S: 'minecraft:stone'
    })

    // 1x Ochrum
    event.recipes.create.compacting('create:ochrum', [
        '3x minecraft:granite',
        'minecraft:orange_dye'
    ])

    // 1x Veridium
    event.recipes.create.compacting('create:veridium', [
        '3x minecraft:andesite',
        'minecraft:green_dye'
    ])

    // 1x Asurine
    event.recipes.create.compacting('create:asurine', [
        '3x minecraft:diorite',
        'minecraft:blue_dye'
    ])

    // 1x Crimsite
    event.recipes.create.compacting('create:crimsite', [
        '3x minecraft:stone',
        '2x minecraft:red_dye'
    ])

    // Gravel + 50% for 2x Pebble + 20% for 2x Pebble
    event.remove({output: 'minecraft:gravel', type: 'milling'})
    event.recipes.create.milling([
        'minecraft:gravel',
        Item.of('2x architect:stone_pebble').withChance(0.50),
        Item.of('2x architect:stone_pebble').withChance(0.20)
        ], 'minecraft:cobblestone'
    )

    // 2x Gold Nugget
    event.recipes.create.milling('2x minecraft:gold_nugget',
        'create:ochrum'
    )

    // 2x Copper Nugget
    event.recipes.create.milling('2x create:copper_nugget', [
        'create:veridium'
    ])

    // 2x Zinc Nugget
    event.recipes.create.milling('2x create:zinc_nugget', [
        'create:asurine'
    ])

    // 2x Iron Nugget
    event.recipes.create.milling('2x minecraft:iron_nugget', [
        'create:crimsite'
    ])

    // Ores
    const ores = [
        'coal', 'iron', 'copper', 'gold', 'redstone',
        'emerald', 'lapis_lazuli', 'diamond'
    ]

    ores.forEach(ore => {
        if (ore != 'iron' && ore != 'copper' && ore != 'gold') {
            event.recipes.create.deploying(`minecraft:${ore}_ore`, [
                'minecraft:stone',
                ore
            ])
            event.recipes.create.deploying(`minecraft:deepslate_${ore}_ore`, [
                'minecraft:deepslate',
                ore
            ])
        } else if (ore == 'iron' || ore == 'copper' || ore == 'gold') {
            event.recipes.create.deploying(`minecraft:${ore}_ore`, [
                'minecraft:stone',
                `${ore}_ingot`
            ])
            event.recipes.create.deploying(`minecraft:deepslate_${ore}_ore`, [
                'minecraft:deepslate',
                `${ore}_ingot`
            ])
        }
    })

    // Nether Gold Ore
    event.recipes.create.deploying('minecraft:nether_gold_ore', [
        'minecraft:netherrack',
        'minecraft:gold_ingot'
    ])

    // Nether Quartz Ore
    event.recipes.create.deploying('minecraft:nether_quartz_ore', [
        'minecraft:netherrack', 
        'minecraft:quartz'
    ])
})
