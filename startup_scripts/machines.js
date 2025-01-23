// priority: 1
GTCEuStartupEvents.registry("gtceu:machine", event => {

    event.create("void_miner", "multiblock")
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

})