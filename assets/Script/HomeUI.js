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
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    GoToPlantOne(e){
        let type = e.currentTarget._name.slice(0); //得到这个节点的名字
        switch(type) {
            case 'land_one':
                console.log("111");
                break;
            case 'land_two':
                console.log("2");
                break;
            case 'land_three':
                console.log("3");
                break;
            case 'land_four':
                console.log("4");
                break;
            case 'land_five':
                console.log("5");
                break;
            case 'land_six':
                console.log("6");
                break;
            case 'land_seven':
                console.log("7");
                break;
            case 'land_eight':
                console.log("8");
                break;
            case 'land_nine':
                console.log("9");
                break;
            case 'wooden':
                console.log("开垦");
                break;
            default:
            console.log("1010");
            break
        }
    },
    // update (dt) {},
});
