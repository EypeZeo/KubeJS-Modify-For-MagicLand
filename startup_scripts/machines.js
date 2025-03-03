// priority: 1
GTCEuStartupEvents.registry("gtceu:machine", event => {

    event.create("void_miner", "multiblock")  //虚空采矿机
        .rotationState(RotationState.NON_Y_AXIS)
        .allowExtendedFacing(false)
        .recipeType("void_miner")
        .tooltips(Component.translatable("gtceu.machine.perfect_oc"))
        .tooltips(Component.translatable("gtceu.machine.available_recipe_map_1.tooltip",
            Component.translatable("gtceu.void_miner")))
        .recipeModifier(GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK))
        .appearanceBlock(GTBlocks.CASING_TITANIUM_STABLE)
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle("XXX", "#F#", "#F#", "#F#", "###", "###", "###")
                .aisle("XXX", "FCF", "FCF", "FCF", "#F#", "#F#", "#F#")
                .aisle("XSX", "#F#", "#F#", "#F#", "###", "###", "###")
                .where("S", Predicates.controller(Predicates.blocks(definition.get())))
                .where("X", Predicates.blocks("gtceu:stable_machine_casing")
                    .or(Predicates.autoAbilities(definition.getRecipeTypes())))
                .where("C", Predicates.blocks("gtceu:stable_machine_casing"))
                .where("F", Predicates.blocks("gtceu:titanium_frame"))
                .where("#", Predicates.any())
                .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_stable_titanium", "gtceu:block/multiblock/large_miner")

    event.create("quantum_energy_compressor", "multiblock") //量子能量压缩机
        .rotationState(RotationState.NON_Y_AXIS)
        .allowExtendedFacing(false)
        .recipeType("quantum_energy_compressor")
        .tooltips(Component.translatable("gtceu.machine.perfect_oc"))
        .tooltips(Component.translatable("gtceu.machine.available_recipe_map_1.tooltip",
            Component.translatable("gtceu.quantum_energy_compressor"),
            Component.translatable("gtceu.quantum_energy_compressor.description")))
        .recipeModifier(GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK))
        .appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST)
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle("CCCCCCCCCGGG", "XXXXXXXXXGGG", "XXXXXXXXXGGG", "CCCCCCCCCGGG", "CCCCCCCCCGGG", "CCCCCCCCCGGG")
                .aisle("CCCCCCCCCGGG", "XE#E#E#E#BDB", "XD#D#D#D#BDB", "XE#E#E#E#BDB", "XD#D#D#D#BDB", "CCCCCCCCCGGG")
                .aisle("CCCCCCCCCGGG", "X#E#E#E#EBDB", "X#D#D#D#DBDB", "X#E#E#E#EBDB", "X#D#D#D#DBDB", "CCCCCCCCCGGG")
                .aisle("CCCCCCCCCGGG", "XAAAAAAAABDB", "XAAAAAAAABDB", "XAAAAAAAABDB", "XAAAAAAAABDB", "CCCCCCCCCGGG")
                .aisle("CCCCCCCCCGGG", "X#E#E#E#EBDB", "X#D#D#D#DBDB", "X#E#E#E#EBDB", "X#D#D#D#DBDB", "CCCCCCCCCGGG")
                .aisle("CCCCCCCCCGGG", "XE#E#E#E#BDB", "XD#D#D#D#BDB", "XE#E#E#E#BDB", "XD#D#D#D#BDB", "CCCCCCCCCGGG")
                .aisle("CCCCCCCCCGGG", "CSCCCCCCCGGG", "CCCCCCCCCGGG", "CCCCCCCCCGGG", "CCCCCCCCCGGG", "CCCCCCCCCGGG")
                .where("S", Predicates.controller(Predicates.blocks(definition.get())))
                .where("X", Predicates.blocks("gtceu:robust_machine_casing")
                    .or(Predicates.autoAbilities(definition.getRecipeTypes())))
                .where("C", Predicates.blocks("gtceu:robust_machine_casing"))
                .where("G", Predicates.blocks("gtceu:molybdenum_disilicide_coil_block"))
                .where("A", Predicates.blocks("gtceu:tungstensteel_gearbox"))
                .where("B", Predicates.blocks("gtceu:laminated_glass"))
                .where("D", Predicates.blocks("gtceu:empty_tier_iii_battery"))
                .where("E", Predicates.blocks("gtceu:heatproof_machine_casing"))
                .where("#", Predicates.air())
                .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_robust_tungstensteel", "gtceu:block/multiblock/large_miner")

    event.create("quantum_energy_decompressor", "multiblock") //量子能量解压机
        .rotationState(RotationState.NON_Y_AXIS)
        .allowExtendedFacing(false)
        .generator(true)
        .recipeType("quantum_energy_decompressor")
        .tooltips(Component.translatable("gtceu.machine.perfect_oc"))
        .tooltips(Component.translatable("gtceu.machine.available_recipe_map_1.tooltip",
            Component.translatable("gtceu.quantum_energy_decompressor")))
        .recipeModifier(GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK))
        .appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST)
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle("GGGGGCCCCCCCCCCCCGGGGG", "GGGGGXXXXXXXXXXXXGGGGG", "GGGGGCCCCCCCCCCCCGGGGG", "GGGGGCCCCCCCCCCCCGGGGG", "GGGGGCCCCCCCCCCCCGGGGG", "GGGGGCCCCCCCCCCCCGGGGG")
                .aisle("GGGGGCCCCCCCCCCCCGGGGG", "BD##B############B##DB", "BD##B############B##DB", "BD##B############B##DB", "BD##B############B##DB", "GGGGGCCCCCCCCCCCCGGGGG")
                .aisle("GGGGGCCCCCCCCCCCCGGGGG", "B#D#B############B#D#B", "B#D#B############B#D#B", "B#D#B############B#D#B", "B#D#B############B#D#B", "GGGGGCCCCCCCCCCCCGGGGG")
                .aisle("GGGGGCCCCCCCCCCCCGGGGG", "B##DB############BD##B", "B##DBA#A#A#A#A#A#BD##B", "B##DB#A#A#A#A#A#ABD##B", "B##DB############BD##B", "GGGGGCCCCCCCCCCCCGGGGG")
                .aisle("GGGGGCCCCCCCCCCCCGGGGG", "B###DAAAAAAAAAAAAD###B", "B###D############D###B", "B###D############D###B", "B###DAAAAAAAAAAAAD###B", "GGGGGCCCCCCCCCCCCGGGGG")
                .aisle("GGGGGCCCCCCCCCCCCGGGGG", "B##DB############BD##B", "B##DBA#A#A#A#A#A#BD##B", "B##DB#A#A#A#A#A#ABD##B", "B##DB############BD##B", "GGGGGCCCCCCCCCCCCGGGGG")
                .aisle("GGGGGCCCCCCCCCCCCGGGGG", "B#D#B############B#D#B", "B#D#B############B#D#B", "B#D#B############B#D#B", "B#D#B############B#D#B", "GGGGGCCCCCCCCCCCCGGGGG")
                .aisle("GGGGGCCCCCCCCCCCCGGGGG", "BD##B############B##DB", "BD##B############B##DB", "BD##B############B##DB", "BD##B############B##DB", "GGGGGCCCCCCCCCCCCGGGGG")
                .aisle("GGGGGCCCCCCCCCCCCGGGGG", "GGGGGCSCCCCCCCCCCGGGGG", "GGGGGCCCCCCCCCCCCGGGGG", "GGGGGCCCCCCCCCCCCGGGGG", "GGGGGCCCCCCCCCCCCGGGGG", "GGGGGCCCCCCCCCCCCGGGGG")
                .where("S", Predicates.controller(Predicates.blocks(definition.get())))
                .where("X", Predicates.blocks("gtceu:robust_machine_casing")
                    .or(Predicates.autoAbilities(definition.getRecipeTypes())))
                .where("C", Predicates.blocks("gtceu:robust_machine_casing"))
                .where("G", Predicates.blocks("gtceu:molybdenum_disilicide_coil_block"))
                .where("A", Predicates.blocks("gtceu:tungstensteel_gearbox"))
                .where("B", Predicates.blocks("ae2:quartz_vibrant_glass"))
                .where("D", Predicates.blocks("gtceu:empty_tier_iii_battery"))
                .where("E", Predicates.blocks("gtceu:heatproof_machine_casing"))
                .where("#", Predicates.air())
                .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_robust_tungstensteel", "gtceu:block/multiblock/large_miner")
    
    event.create("quantum_energy_liquefier", "multiblock") //量子能量液化器
        .rotationState(RotationState.NON_Y_AXIS)
        .allowExtendedFacing(false)
        .recipeType("quantum_energy_liquefier")
        .tooltips(Component.translatable("gtceu.machine.perfect_oc"))
        .tooltips(Component.translatable("gtceu.machine.available_recipe_map_1.tooltip",
            Component.translatable("gtceu.quantum_energy_liquefier")))
        .recipeModifier(GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK))
        .appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST)
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle("CCCCC", "CXXXC", "#####", "#####", "#####", "#####","#####")
                .aisle("CCCCC", "XCCCX", "#DDD#", "#DDD#", "#DDD#", "#G#G#","#####")
                .aisle("CCCCC", "XCCCX", "#DBD#", "#DBD#", "#DBD#", "##C##","##G##")
                .aisle("CCCCC", "XCCCX", "#DDD#", "#DDD#", "#DDD#", "#G#G#","#####")
                .aisle("CCCCC", "CSCCC", "#####", "#####", "#####", "#####","#####")
                .where("S", Predicates.controller(Predicates.blocks(definition.get())))
                .where("X", Predicates.blocks("gtceu:stable_machine_casing")
                    .or(Predicates.autoAbilities(definition.getRecipeTypes())))
                .where("C", Predicates.blocks("gtceu:stable_machine_casing"))
                .where("G", Predicates.blocks("gtceu:titanium_frame"))
                .where("B", Predicates.blocks("gtceu:titanium_firebox_casing"))
                .where("D", Predicates.blocks("gtceu:cupronickel_coil_block"))
                .where("#", Predicates.air())
                .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_stable_titanium", "gtceu:block/multiblock/large_miner")

})