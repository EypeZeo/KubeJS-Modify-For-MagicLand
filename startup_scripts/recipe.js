// priority: 2
GTCEuStartupEvents.registry("gtceu:recipe_type", event => {

    event.create("void_miner")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(4, 4, 1, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MINER)

    event.create("quantum_energy_compressor")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(4, 4, 1, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_WIREMILL, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR)

    event.create("quantum_energy_decompressor")
        .setEUIO("out")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(2, 0, 2, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_EXTRACT, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CENTRIFUGE)

    event.create("quantum_energy_liquefier")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(2, 0, 2, 2)
        .setProgressBar(GuiTextures.PROGRESS_BAR_LATHE, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CENTRIFUGE)
})