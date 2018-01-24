(function () {
    var car_detail_constructor = Vue.extend({
        template:
            '
            <div v-show="next==index+1" class= "page" v-for="(item,index) in answerArray" :key="index">\
                <div class="answer_bg answer_bg1"></div>\
                <div class="board">\
                    <span class="select">{{ item.title}}</span>\
                    <div class="answer_num">第{{index}}题</div>\
                </div>\
                <div class="answer">\
                    <div class="answer_bar">\
                        <img class="right" src="./images/right.png" v-show="item.oa1==item.option1" />\
                        <input type="radio" id="a1" :name="item.A1" v-model="oa1" :value="item.option1" />{{ option1 }}\
                    </div>\
                    <div class="answer_bar">\
                        <img class="right" src="./images/right.png" v-show="item.oa1==item.option2" />\
                        <input type="radio" id="b1" :name="item.A1" v-model="oa1" :value="item.option2" />{{ option2 }}\
                    </div>\
                    <div class="answer_bar">\
                        <img class="right" src="./images/right.png" v-show="item.oa1==item.option3" />\
                        <input type="radio" id="c1" :name="item.A1" v-model="oa1" :value="item.option3" />{{ option3 }}\
                    </div>\
                </div>\
                <div class="answer_button">\
                    <div class="button_1" @click="answer_back()" :class="{interactive: animate==2}" v-if="index>0">上一题</div>\
                    <div class="button_1" @click="answer_back()" :class="{interactive: animate==2}" v-if="index==0">返回</div>\
                    <div class="button_2" @click="nextChoice(index)" : class="{interactive:animate==3}" v-if= "index!=answerArray.length-1"> 下一题</div >\
                    <div class="button_2" @click="submit(3)" : class="{interactive:animate==7}" v-if="index==answerArray.length-1"> 提交答案</div >\
                </div >\
            </div >\
            ',
        data: function () {
            return {
                answerArray:[
                    {
                        title:'康明斯在BICES北京工程机械展上，展出的2.8升至15升 QSF、QSB、QSL、QSG、QSZ、QSX智能电控发动机系列，满足中国非道路国III 、 国IV排放标准的有？',
                        oa1:'',
                        name:'A1',
                        option1:'QSF, QSB, QSL',
                        option2:'QSG, QSZ, QSX',
                        option3:'全部',
                    },
                    {
                        title: '康明斯满足中国非道路国III、国IV排放标准的F、B、L、G、Z系列电控发动机，3.8升至13升，在北京福田康明斯、东风康明斯、广西康明斯本地化生产，全面匹配以下工程机械设备？',
                        oa2:'',
                        name:'B1',
                        option1: 'QSF, QSB, QSL',
                        option2: 'QSG, QSZ, QSX',
                        option3: '全部',
                    },
                    {
                        title: '工程机械电控发动机普遍要求的燃油过滤精度是多少微米？',
                        oa3:'',
                        name:'C1',
                        option1: 'QSF, QSB, QSL',
                        option2: 'QSG, QSZ, QSX',
                        option3: '全部',
                    },
                    
                ]
            }
        },
        created: function () {
            var that = this;
            
        },
        methods: {

        }
    });
    // Vue.prototype.$car_detail = function (car_id) {
    //     var instance = new car_detail_constructor({
    //         data: {
    //             car_id: car_id
    //         }
	// 		prposData: {
    //             next: {
    //                 type: Boolean,
    //                 default: 0
    //             }
    //         }
    //     }).$mount();
    //     document.body.appendChild(instance.$el);
    //     setTimeout(function () {
    //         instance.$data.car_detail_switch = true;
    //     }, 1);
    // };
}());