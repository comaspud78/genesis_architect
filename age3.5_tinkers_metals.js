// Age 3.5
// Tinker's Construct: Metals

ServerEvents.recipes(event => {

    const tinkerMetals = [
        { type: 'cobalt', base: 'steel', catalyst: 'lapis_lazuli' },
        { type: 'slimesteel', base: 'steel', catalyst: 'slime_ball' },
        { type: 'knightmetal', base: 'cinderslime', catalyst: 'end_stone' },
    ]

    tinkerMetals.forEach(metal => {
        event.recipes.create.compacting(`tconstruct:${metal.type}_ingot`, [
            `tconstruct:${metal.base}_block`,
            `minecraft:${metal.catalyst}`
        ]).heated()
        
        event.recipes.create.compacting(`tconstruct:${metal.type}_block`, [
            `tconstruct:${metal.base}_block`,
            `minecraft:${metal.catalyst}`
        ]).superheated()
    })

    const altMetals = [
        { type: 'steel', base: `minecraft:iron`, 
        catalyst:`minecraft:coal` },
        { type: 'pig_iron', base: `minecraft:iron`, catalyst: `tconstruct:bacon` },
        { type: 'cinderslime', base: `tconstruct:slimesteel`, catalyst: `create:cinder_flour` }
    ]

    altMetals.forEach(metal => {
        event.recipes.create.compacting(`tconstruct:${metal.type}_ingot`, [
            `${metal.base}_block`,
            `${metal.catalyst}`
        ]).heated()

        event.recipes.create.compacting(`tconstruct:${metal.type}_block`, [
            `${metal.base}_block`,
            `${metal.catalyst}`
        ]).superheated()
    })

    // Nether Cobalt Ore
    event.recipes.create.deploying('tconstruct:cobalt_ore', [
        'minecraft:netherrack',
        'tconstruct:cobalt_ingot'
    ])
})
