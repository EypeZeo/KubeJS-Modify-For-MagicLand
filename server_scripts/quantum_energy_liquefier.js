ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu
    gtr.quantum_energy_liquefier("convert_energy_to_liquid_ULV") //电力转液体
        .outputFluids(Fluid.of('gtceu:quantum_liquid_energy', 8))
        .circuit(0)
        .duration(10)
        .EUt(8)

    gtr.quantum_energy_liquefier("convert_energy_to_liquid_LV")
        .outputFluids(Fluid.of('gtceu:quantum_liquid_energy', 32))
        .circuit(1)
        .duration(10)
        .EUt(32)

    gtr.quantum_energy_liquefier("convert_energy_to_liquid_MV")
        .outputFluids(Fluid.of('gtceu:quantum_liquid_energy', 128))
        .circuit(2)
        .duration(10)
        .EUt(128)

    gtr.quantum_energy_liquefier("convert_energy_to_liquid_HV")
        .outputFluids(Fluid.of('gtceu:quantum_liquid_energy', 512))
        .circuit(3)
        .duration(10)
        .EUt(512)

    gtr.quantum_energy_liquefier("convert_energy_to_liquid_EV")
        .outputFluids(Fluid.of('gtceu:quantum_liquid_energy', 2048))
        .circuit(4)
        .duration(10)
        .EUt(2048)

    gtr.quantum_energy_liquefier("convert_energy_to_liquid_IV")
        .outputFluids(Fluid.of('gtceu:quantum_liquid_energy', 8192))
        .circuit(5)
        .duration(10)
        .EUt(8192)

    gtr.quantum_energy_liquefier("convert_energy_to_liquid_LUV")
        .outputFluids(Fluid.of('gtceu:quantum_liquid_energy', 32768))
        .circuit(6)
        .duration(10)
        .EUt(32768)

    gtr.quantum_energy_liquefier("convert_energy_to_liquid_ZPM")
        .outputFluids(Fluid.of('gtceu:quantum_liquid_energy', 131072))
        .circuit(7)
        .duration(10)
        .EUt(131072)

    gtr.quantum_energy_liquefier("convert_energy_to_liquid_UV")
        .outputFluids(Fluid.of('gtceu:quantum_liquid_energy', 524288))
        .circuit(8)
        .duration(10)
        .EUt(524288)

    gtr.quantum_energy_liquefier("convert_energy_to_liquid_UHV")
        .outputFluids(Fluid.of('gtceu:quantum_liquid_energy', 2097152))
        .circuit(9)
        .duration(10)
        .EUt(2097152)

    gtr.quantum_energy_liquefier("convert_energy_to_liquid_UEV")
        .outputFluids(Fluid.of('gtceu:quantum_liquid_energy', 8388608))
        .circuit(10)
        .duration(10)
        .EUt(8388608)

    gtr.quantum_energy_liquefier("convert_energy_to_liquid_UIV")
        .outputFluids(Fluid.of('gtceu:quantum_liquid_energy', 33554432))
        .circuit(11)
        .duration(10)
        .EUt(33554432)

    gtr.quantum_energy_liquefier("convert_energy_to_liquid_UMV")
        .outputFluids(Fluid.of('gtceu:quantum_liquid_energy', 134217728))
        .circuit(12)
        .duration(10)
        .EUt(134217728)

    gtr.quantum_energy_liquefier("convert_energy_to_liquid_UXV")
        .outputFluids(Fluid.of('gtceu:quantum_liquid_energy', 536870912))
        .circuit(13)
        .duration(10)
        .EUt(536870912)

    gtr.quantum_energy_liquefier("convert_energy_to_liquid_MAX")
        .outputFluids(Fluid.of('gtceu:quantum_liquid_energy', 2147483647))
        .circuit(14)
        .duration(10)
        .EUt(2147483647)

})