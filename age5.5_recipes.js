// Age 5.5 Recipes

ServerEvents.recipes(event => {

    // 1x Plastic Bar
        event.recipes.create.mixing('architect:plastic_bar', [
            ['minecraft:coal', 'minecraft:charcoal'],
            'minecraft:sugar',
            Fluid.water(1000)
        ]).heated()

        event.recipes.create.mixing('architect:plastic_bar', [
            '4x architect:plastic_bit'
        ]).heated()

        // 1x Plastic Bit
        event.shapeless('4x architect:plastic_bit', ['architect:plastic_bar'])

        // 1x Blank Disc
        event.recipes.create.deploying('architect:blank_disc', [
            'architect:plastic_bar',
            'minecraft:ender_pearl'
        ])

        // 1x Disc Shard
        event.shaped('minecraft:disc_fragment_5', [
            'PP',
            'PD'
        ], {
            P: 'architect:plastic_bit',
            D: 'architect:diamond_chunk'
        })

        // Music Discs

        const discRec = ( song, ingr ) => {
            event.recipes.create.deploying(`minecraft:music_disc_${song}`, [
                'architect:blank_disc',
                ingr
            ])
        }

        discRec('13', 'minecraft:cobblestone')
        discRec('cat', '#architect:raw_fish')
        discRec('blocks', 'minecraft:gold_block')
        discRec('chirp', 'minecraft:oak_leaves')
        discRec('far', 'minecraft:spyglass')
        discRec('mall', 'minecraft:emerald')
        discRec('mellohi', 'minecraft:amethyst_block')
        discRec('stal', 'minecraft:bone')
        discRec('strad', 'create:iron_sheet')
        discRec('ward', 'minecraft:iron_sword')
        discRec('11', 'minecraft:sculk_catalyst')
        discRec('wait', 'minecraft:clock')
        discRec('otherside', 'minecraft:grass_block')
        discRec('pigstep', 'minecraft:gold_ingot')
        discRec('relic', 'minecraft:map')

})
