ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu

    gtr.void_miner("gtceu:mv_machine_hull")
        .itemInputs('1x gtceu:mv_machine_casing')
        .itemOutputs('1x gtceu:mv_machine_hull')
        .duration(100)
        .EUt(20)
})