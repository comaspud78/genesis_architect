// Age 4.5
// Tinkers Construct: Eggs

ServerEvents.recipes(event => {
    const tinkEggs = [
        { mob: 'terracube', ingredient1: 'minecraft:clay_ball', ingredient2: 'minecraft:clay_ball' },
        { mob: 'sky_slime', ingredient1: 'minecraft:feather', ingredient2: 'minecraft:blue_dye' },
        { mob: 'ender_slime', ingredient1: 'minecraft:ender_pearl', ingredient2: 'minecraft:chorus_fruit' }
    ]
    
    tinkEggs.forEach(egg => {
        event.shapeless(`tconstruct:${egg.mob}_spawn_egg`, [
            'architect:lesser_spawn_egg',
            'minecraft:slime_ball',
            egg.ingredient1,
            egg.ingredient2
            
        ])
    })
})
