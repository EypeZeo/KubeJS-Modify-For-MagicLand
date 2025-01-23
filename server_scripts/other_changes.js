ServerEvents.recipes(event => {
    event.remove({ output: 'buildinggadgets2:template_manager' })
    event.shaped('buildinggadgets2:template_manager', [
        'ABA',
        'CBC',
        'ADA'
    ], {
        A: 'minecraft:iron_block',
        D: 'minecraft:redstone_block',
        C: 'minecraft:paper',
        B: 'minecraft:lapis_lazuli'
    }),
    event.remove({ output: 'buildinggadgets2:gadget_building' })
    event.shaped('buildinggadgets2:gadget_building', [
        'ABA',
        'CBC',
        'ADA'
    ], {
        A: 'minecraft:iron_block',
        B: 'minecraft:redstone_block',
        C: 'minecraft:diamond_block',
        D: 'minecraft:lapis_lazuli'
    }),
    event.remove({ output: 'buildinggadgets2:gadget_exchanging' })
    event.shaped('buildinggadgets2:gadget_exchanging', [
        'ADA',
        'CBC',
        'ABA'
    ], {
        A: 'minecraft:iron_block',
        B: 'minecraft:lapis_lazuli',
        C: 'minecraft:redstone_block',
        D: 'minecraft:diamond_block'
    }),
    event.remove({ output: 'buildinggadgets2:gadget_copy_paste' })
    event.shaped('buildinggadgets2:gadget_copy_paste', [
        'ADA',
        'CDC',
        'ABA'
    ], {
        A: 'minecraft:iron_block',
        B: 'minecraft:lapis_lazuli',
        C: 'minecraft:emerald',
        D: 'minecraft:redstone_block'
    }),
    event.remove({ output: 'buildinggadgets2:gadget_cut_paste' })
    event.shaped('buildinggadgets2:gadget_cut_paste', [
        'ADA',
        'CDC',
        'ABA'
    ], {
        A: 'minecraft:iron_block',
        B: 'minecraft:lapis_lazuli',
        C: 'minecraft:shears',
        D: 'minecraft:redstone_block'
    }),
    event.remove({ output: 'buildinggadgets2:gadget_destruction' })
    event.shaped('buildinggadgets2:gadget_destruction', [
        'ADA',
        'CDC',
        'ABA'
    ], {
        A: 'minecraft:iron_block',
        B: 'minecraft:lapis_lazuli',
        C: 'minecraft:ender_pearl',
        D: 'minecraft:redstone_block'
    })
    event.shapeless('16x thermal:phytogro', ['#forge:sand','minecraft:granite','minecraft:andesite','minecraft:diorite'])
    event.remove({ output: 'armourers_workshop:skin-library' })
    event.remove({ output: 'armourers_workshop:skin-library-creative' })
    event.remove({ output: 'armourers_workshop:skin-library-global' })
    event.remove({ output: 'armourers_workshop:hologram-projector' })
    event.remove({ output: 'armourers_workshop:skin-unlock-head' })
    event.remove({ output: 'armourers_workshop:skin-unlock-chest' })
    event.remove({ output: 'armourers_workshop:skin-unlock-feet' })
    event.remove({ output: 'armourers_workshop:skin-unlock-legs' })
    event.remove({ output: 'armourers_workshop:skin-unlock-wings' })
    event.remove({ output: 'armourers_workshop:skin-unlock-outfit' })

    //-------------------------------------------------------------食物追加
    event.custom({
        "type": "farmersdelight:cooking", //牛肉大葱馅水饺
        "cookingtime": 200,
        "experience": 1.0,
        "ingredients": [
          {
            "tag": "forge:crops/onion"
          },
          {
              "tag": "forge:raw_beef"
          },
          {
              "tag": "forge:dough"
          }
        ],
        "result": {
          "count": 2,
          "item": "mindx:nrdc"
        }
      })
    event.custom({
        "type": "farmersdelight:cooking", //猪肉大葱馅水饺
        "cookingtime": 200,
        "experience": 1.0,
        "ingredients": [
          {
            "tag": "forge:crops/onion"
          },
          {
              "tag": "forge:raw_pork"
          },
          {
              "tag": "forge:dough"
          }
        ],
        "result": {
          "count": 2,
          "item": "mindx:zrdc"
        }
      })
    event.custom({
        "type": "farmersdelight:cooking", //鲜肉蔬菜馅水饺
        "cookingtime": 200,
        "experience": 1.0,
        "ingredients": [
          [{
            "tag": "forge:crops/spinach"
          },
          {
            "tag": "forge:crops/cabbage"
          },
          {
            "tag": "forge:crops/amaranth"
          },
          {
            "tag": "forge:crops/eggplant"
          },
        ],
          {
              "tag": "forge:raw_pork"
          },
          {
              "tag": "forge:dough"
          }
        ],
        "result": {
          "count": 2,
          "item": "mindx:xrsc"
        }
      })
    event.custom({
        "type": "farmersdelight:cooking", //海鲜馅水饺
        "cookingtime": 200,
        "experience": 1.0,
        "ingredients": [
          [{
            "tag": "forge:crops/spinach"
          },
          {
            "tag": "forge:crops/cabbage"
          },
          {
            "tag": "forge:crops/amaranth"
          },
          {
            "tag": "forge:crops/eggplant"
          },
        ],
          {
              "tag": "forge:foods/fish/raw"
          },
          {
              "tag": "forge:dough"
          }
        ],
        "result": {
          "count": 2,
          "item": "mindx:hx"
        }
      })
    event.custom({
        "type": "farmersdelight:cooking", //鸡肉蘑菇馅水饺
        "cookingtime": 200,
        "experience": 1.0,
        "ingredients": [
          {
            "tag": "forge:mushrooms"
          },
          {
              "tag": "forge:raw_chicken"
          },
          {
              "tag": "forge:dough"
          }
        ],
        "result": {
          "count": 2,
          "item": "mindx:jrmg"
        }
      })
    event.shapeless('2x mindx:midori_roll_slice', ['thermal:sadiroot','thermal:redstone_mushroom_spores','thermal:gunpowder_mushroom_spores','thermal:tomato','farmersdelight:rice','minecraft:dried_kelp'])
    event.shapeless('2x mindx:egg_roll',['farmersdelight:rice','minecraft:dried_kelp','farmersdelight:fried_egg'])
    event.shapeless('2x mindx:cafe_roll',['farmersdelight:rice','minecraft:dried_kelp','thermal:coffee'])
    event.shapeless('2x mindx:chicken_roll_slice',['farmersdelight:rice','minecraft:dried_kelp','farmersdelight:cooked_chicken_cuts'])
    event.shapeless('2x mindx:tropical_roll',['farmersdelight:rice','minecraft:dried_kelp','minecraft:tropical_fish'])
    event.shapeless('2x mindx:chicken_wrap',['#forge:crops/cabbage','#forge:dough/wheat','#forge:cooked_chicken','#forge:crops/tomato'])
})