// Age 2.5
// Tinkers Construct: Biology

ServerEvents.recipes(event => {
    event.recipes.create.cutting('3x tconstruct:bacon', [
        'minecraft:porkchop'
    ])

    event.recipes.create.mixing('tconstruct:ichor_slime', [
        'minecraft:slime_block'
    ]).heated()

    event.recipes.create.mixing('3x tconstruct:ichor_slime', [
        'minecraft:slime_block',
        Fluid.lava(1000)
    ]).heated()

    const slimeSeeds = [
        { type: 'earth', dye: 'green' },
        { type: 'sky', dye: 'cyan' },
        { type: 'blood', dye: 'red' },
        { type: 'ender', dye: 'purple' }
    ]

    slimeSeeds.forEach(s => {
        event.recipes.create.mixing(`3x tconstruct:${s.type}_slime_grass_seeds`, [
            '2x minecraft:wheat_seeds',
            '2x minecraft:slime_ball',
            `minecraft:${s.dye}_dye`
        ])
    })
})
