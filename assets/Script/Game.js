// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },

        itemPlant: {
            default:null,
            type:cc.Prefab
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.creatItem();
    },

    creatItem (){
        var self = this;

        let bg = cc.find("bg", this.node);
        let Prefab = cc.instantiate(self.itemPlant);
        let PrefabPlant_xs = cc.find("itemdemo-xs", Prefab);
        let PrefabPlant_md = cc.find("itemdemo-md", Prefab);
        let PrefabPlant_lg = cc.find("itemdemo-lg", Prefab);
        let PrefabPlant_tip = cc.find("New Node/reap", Prefab);

        cc.loader.loadRes("Farm/water", cc.SpriteFrame, function(err, spriteFrame) {
            obj.getComponent(cc.Sprite).spriteFrame = spriteFrame;
          });
          obj.active = true;

         //小树苗
        PrefabPlant_xs.active = true;
        PrefabPlant_md.active = false;
        PrefabPlant_lg.active = false;
        bg.addChild(Prefab);
    },

    // update (dt) {},
});
