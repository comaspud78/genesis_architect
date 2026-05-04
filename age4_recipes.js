// Age 4 Recipes

ServerEvents.recipes(event => {

    // 1x Basic Spawn Egg
    event.shaped('architect:basic_spawn_egg', [
        'ED',
        'DE'
    ], {
        E: 'minecraft:egg',
        D: 'minecraft:diamond'
    })

    // 1x Lesser Spawn Egg
    event.shaped('architect:lesser_spawn_egg', [
        'BE',
        'LD'
    ], {
        B: 'architect:basic_spawn_egg',
        E: 'minecraft:emerald',
        L: 'minecraft:lapis_lazuli',
        D: 'minecraft:diamond'
    })

    // 1x Greater Spawn Egg
    event.shaped('architect:greater_spawn_egg', [
        'LN',
        'ND'
    ], {
        L: 'architect:lesser_spawn_egg',
        N: 'minecraft:netherite_scrap',
        D: 'minecraft:diamond'
    })

    // 1x Empty Mob Spawner
    event.shaped('minecraft:spawner', [
        'IMI',
        'DBD',
        'IUI'
    ], {
        I: 'minecraft:iron_bars',
        M: Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{id:"minecraft:mending",lvl:1}]}').weakNBT(),
        D: 'minecraft:dispenser',
        B: 'minecraft:basic_spawn_egg',
        U: Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:1}]}').weakNBT()
    })

    const basicEggs = [
        { mob: 'allay', ingredients: ['minecraft:feather', 'minecraft:ghast_tear', 'minecraft:amethyst_shard']},
        { mob: 'axolotl', ingredients: ['minecraft:big_dripleaf', 'minecraft:clay', 'minecraft:tropical_fish']},
        { mob: 'bat', ingredients: ['minecraft:pointed_dripstone', 'minecraft:stone', 'minecraft:moss_block']},
        { mob: 'bee', ingredients: ['minecraft:grass_block', '#minecraft:flowers', 'minecraft:honey_block']},
        { mob: 'camel', ingredients: ['minecraft:sand', 'minecraft:cactus', 'minecraft:water_bucket']},
        { mob: 'cat', ingredients: ['minecraft:string', '#architect:cooked_fish', 'minecraft:milk_bucket']},
        { mob: 'chicken', ingredients: ['#architect:seeds', '#minecraft:small_flowers', 'minecraft:grass_block']},
        { mob: 'cod', ingredients: ['minecraft:water_bucket', 'minecraft:bone_meal', 'minecraft:seagrass']},
        { mob: 'cow', ingredients: ['minecraft:grass_block', 'minecraft:wheat', 'minecraft:milk_bucket']},
        { mob: 'dolphin', ingredients: ['#architect:raw_fish', 'minecraft:seagrass', 'minecraft:kelp']},
        { mob: 'donkey', ingredients: ['minecraft:lead', 'minecraft:apple', 'minecraft:carrot']},
        { mob: 'fox', ingredients: ['minecraft:sweet_berries', 'minecraft:snowball', 'minecraft:rabbit']},
        { mob: 'frog', ingredients: ['minecraft:big_dripleaf', 'minecraft:slime_block', 'minecraft:water_bucket']},
        { mob: 'glow_squid', ingredients: ['minecraft:water_bucket', 'minecraft:glow_berries', 'minecraft:deepslate']},
        { mob: 'goat', ingredients: ['minecraft:milk_bucket', 'minecraft:bell', 'minecraft:pointed_dripstone']},
        { mob: 'horse', ingredients: ['minecraft:saddle', 'minecraft:apple', 'minecraft:carrot']},
        { mob: 'llama', ingredients: ['minecraft:lead', 'minecraft:leather', '#minecraft:wool_carpets']},
        { mob: 'mooshroom', ingredients: ['minecraft:milk_bucket', 'minecraft:mycelium', 'minecraft:red_mushroom']},
        { mob: 'mule', ingredients: ['minecraft:lead', 'minecraft:saddle', 'minecraft:sugar']},
        { mob: 'ocelot', ingredients: ['#architect:raw_fish', 'minecraft:jungle_log', 'minecraft:cocoa_beans']},
        { mob: 'panda', ingredients: ['minecraft:slime_ball', 'minecraft:bamboo', 'minecraft:cake']},
        { mob: 'parrot', ingredients: ['#minecraft:music_discs', '#architect:seeds', 'minecraft:jungle_leaves']},
        { mob: 'pig', ingredients: ['minecraft:carrot', 'minecraft:dirt', 'minecraft:brown_mushroom']},
        { mob: 'polar_bear', ingredients: ['minecraft:ice', '#architect:raw_fish', 'minecraft:pointed_dripstone']},
        { mob: 'pufferfish', ingredients: ['minecraft:poisonous_potato', 'minecraft:sponge', 'minecraft:water_bucket']},
        { mob: 'rabbit', ingredients: ['minecraft:carrot', 'minecraft:sugar', '#minecraft:small_flowers']},
        { mob: 'salmon', ingredients: ['minecraft:water_bucket', 'minecraft:seagrass', 'minecraft:egg']},
        { mob: 'sheep', ingredients: ['minecraft:grass_block', '#minecraft:wool', 'minecraft:wheat']},
        { mob: 'silverfish', ingredients: ['minecraft:string', 'minecraft:stone_bricks', 'minecraft:iron_nugget']},
        { mob: 'snow_golem', ingredients: ['minecraft:pumpkin', 'minecraft:coal', 'minecraft:snow_block']},
        { mob: 'squid', ingredients: ['minecraft:water_bucket', 'minecraft:black_dye', '#architect:raw_fish']},
        { mob: 'tadpole', ingredients: ['minecraft:water_bucket', 'minecraft:slime_ball', 'minecraft:small_dripleaf']},
        { mob: 'trader_llama', ingredients: ['minecraft:lead', 'minecraft:leather', '#minecraft:banners']},
        { mob: 'tropical_fish', ingredients: ['minecraft:water_bucket', '#architect:dyes', '#architect:dyes']},
        { mob: 'turtle', ingredients: ['minecraft:seagrass', 'minecraft:sand', 'minecraft:water_bucket']},
        { mob: 'wolf', ingredients: ['minecraft:rabbit', 'minecraft:bone', 'minecraft:cooked_beef']},
    ]

    const lesserEggs = [
        { mob: 'blaze', ingredients: ['minecraft:blaze_rod', 'minecraft:red_nether_bricks', 'minecraft:nether_wart']},
        { mob: 'cave_spider', ingredients: ['minecraft:cobblestone', 'minecraft:poisonous_potato', 'minecraft:string']},
        { mob: 'creeper', ingredients: ['minecraft:sand', 'minecraft:gravel', 'minecraft:gunpowder']},
        { mob: 'drowned', ingredients: ['minecraft:rotten_flesh', 'minecraft:lapis_lazuli', 'minecraft:water_bucket']},
        { mob: 'enderman', ingredients: ['minecraft:chorus_fruit', 'minecraft:amethyst_block', 'minecraft:obsidian']},
        { mob: 'endermite', ingredients: ['minecraft:chorus_fruit', 'minecraft:amethyst_shard', 'minecraft:end_stone']},
        { mob: 'evoker', ingredients: ['minecraft:emerald', 'minecraft:lapis_lazuli', 'minecraft:cyan_wool']},
        { mob: 'ghast', ingredients: ['minecraft:packed_ice', 'minecraft:quartz', 'minecraft:water_bucket']},
        { mob: 'guardian', ingredients: ['minecraft:wet_sponge', '#architect:raw_fish', 'minecraft:prismarine']},
        { mob: 'hoglin', ingredients: ['minecraft:crimson_fungus', 'minecraft:blackstone', 'minecraft:pointed_dripstone']},
        { mob: 'husk', ingredients: ['minecraft:rotten_flesh', 'minecraft:lapis_lazuli', 'minecraft:sand']},
        { mob: 'phantom', ingredients: ['minecraft:feather', 'minecraft:clock', 'minecraft:phantom_membrane']},
        { mob: 'piglin', ingredients: ['minecraft:nether_wart', 'minecraft:soul_sand', 'minecraft:gold_nugget']},
        { mob: 'piglin_brute', ingredients: ['minecraft:nether_wart', 'minecraft:soul_sand', Item.of('minecraft:golden_axe').weakNBT()]},
        { mob: 'pillager', ingredients: ['minecraft:emerald', 'minecraft:lapis_lazuli', 'minecraft:arrow']},
        { mob: 'ravager', ingredients: ['minecraft:lapis_lazuli', 'minecraft:saddle', 'minecraft:emerald']},
        { mob: 'shulker', ingredients: ['minecraft:ender_pearl', 'minecraft:purpur_block', 'minecraft:end_stone']},
        { mob: 'skeleton', ingredients: ['minecraft:bone', 'minecraft:lapis_lazuli', 'minecraft:arrow']},
        { mob: 'skeleton_horse', ingredients: ['minecraft:bone', 'minecraft:lapis_lazuli', 'minecraft:saddle']},
        { mob: 'slime', ingredients: ['minecraft:honey_block', 'minecraft:lime_dye', 'minecraft:redstone']},
        { mob: 'sniffer', ingredients: ['minecraft:clock', 'minecraft:dirt', '#architect:seeds']},
        { mob: 'spider', ingredients: ['minecraft:cobblestone', 'minecraft:string', 'minecraft:vine']},
        { mob: 'stray', ingredients: ['minecraft:bone', 'minecraft:lapis_lazuli', 'minecraft:snowball']},
        { mob: 'strider', ingredients: ['minecraft:lava_bucket', 'minecraft:nether_wart_block', 'minecraft:warped_fungus']},
        { mob: 'vex', ingredients: ['minecraft:lapis_lazuli', 'minecraft:phantom_membrane', 'minecraft:rotten_flesh']},
        { mob: 'vindicator', ingredients: ['minecraft:emerald', 'minecraft:lapis_lazuli', 'minecraft:iron_axe']},
        { mob: 'wandering_trader', ingredients: ['minecraft:emerald', 'minecraft:poppy', '#minecraft:banners']},
        { mob: 'witch', ingredients: ['minecraft:glass_bottle', 'minecraft:lily_pad', 'minecraft:clay']},
        { mob: 'zoglin', ingredients: ['minecraft:lapis_lazuli', 'minecraft:rotten_flesh', 'minecraft:pointed_dripstone']},
        { mob: 'zombie', ingredients: ['minecraft:lapis_lazuli', 'minecraft:rotten_flesh', 'minecraft:cyan_wool']},
        { mob: 'zombie_horse', ingredients: ['minecraft:lapis_lazuli', 'minecraft:rotten_flesh', 'minecraft:saddle']},
        { mob: 'zombie_villager', ingredients: ['minecraft:lapis_lazuli', 'minecraft:rotten_flesh', 'minecraft:emerald']},
        { mob: 'zombified_piglin', ingredients: ['minecraft:lapis_lazuli', 'minecraft:rotten_flesh', 'minecraft:gold_nugget']},
    ]

    const greaterEggs = [
        { mob: 'elder_guardian', ingredients: ['minecraft:wet_sponge', '#architect:raw_fish', 'minecraft:heart_of_the_sea']},
        { mob: 'magma_cube', ingredients: ['minecraft:magma_cream', 'minecraft:basalt', 'minecraft:lava_bucket']},
        { mob: 'villager', ingredients: ['minecraft:emerald', 'minecraft:stick', 'minecraft:poppy']},
        { mob: 'warden', ingredients: ['minecraft:sculk_catalyst', '#minecraft:wool', 'minecraft:deepslate']},
        { mob: 'wither_skeleton', ingredients: ['minecraft:bone', 'minecraft:soul_sand', 'minecraft:iron_sword']},
    ]

    const eggTypes = [
        { base: 'architect:basic_spawn_egg', list: basicEggs },
        { base: 'architect:lesser_spawn_egg', list: lesserEggs },
        { base: 'architect:greater_spawn_egg', list: greaterEggs }
    ]

    eggTypes.forEach(group => {
        group.list.forEach(r => {
            let ingredientList = [group.base];

            r.ingredients.forEach(ing => {
                ingredientList.push(ing)
            })

            let recipe = event.shapeless(`minecraft:${r.mob}_spawn_egg`, ingredientList)
            r.ingredients.forEach(ing => {
                if (String(ing).includes('_bucket')) {
                    recipe.replaceIngredient(ing, 'minecraft:bucket')
                }
            })
        })
    })
    
    event.recipes.create.deploying('minecraft:skeleton_skull', [
        'minecraft:bone_block',
        'minecraft:carved_pumpkin'
    ])

    const headTypes = [
        { species: 'player_head', catalyst: 'lapis_lazuli' },
        { species: 'zombie_head', catalyst: 'rotten_flesh' },
        { species: 'creeper_head', catalyst: 'gunpowder' }, 
        { species: 'piglin_head', catalyst: 'gold_nugget' },
        { species: 'wither_skeleton_skull', catalyst: 'soul_sand' },
        { species: 'dragon_head', catalyst: 'ender_eye'}
    ]

    headTypes.forEach(head => {
        event.recipes.create.mixing(`minecraft:${head.species}`, [
            'minecraft:skeleton_skull',
            '2x architect:plastic_bit',
            `4x minecraft:${head.catalyst}`
        ]).heated()
    })
    

})
