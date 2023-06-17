/*
 * @Author: SnowWarri0r
 * @LastModifiedBy: SnowWarri0r
 * @GithubUser: SnowWarri0r
 * @Date: 2023-06-16 21:42:38
 * @Company: ncuhome
 * @LastEditTime: 2023-06-16 22:18:41
 * @FilePath: \notelog_fe\src\components\CityPicker\index.tsx
 * @Description:
 */
import React from "react";
import { Cascader } from "antd";

interface Option {
  value: string;
  label: string;
  children?: Option[];
}

interface Props {
  value: string[];
  setValue: (value: string[]) => void;
}

const App: React.FC<Props> = ({ value, setValue }) => {
  function handleChange(v: string[]) {
    setValue(v);
    console.log(value);
  }
  return <Cascader options={options} defaultValue={value} onChange={handleChange} />;
};

export default App;

const options: Option[] = [
  {
    label: "安徽",
    value: "安徽",
    children: [
      {
        label: "合肥",
        value: "合肥",
      },
      {
        label: "安庆",
        value: "安庆",
      },
      {
        label: "蚌埠",
        value: "蚌埠",
      },
      {
        label: "亳州",
        value: "亳州",
      },
      {
        label: "巢湖",
        value: "巢湖",
      },
      {
        label: "池州",
        value: "池州",
      },
      {
        label: "滁州",
        value: "滁州",
      },
      {
        label: "阜阳",
        value: "阜阳",
      },
      {
        label: "淮北",
        value: "淮北",
      },
      {
        label: "淮南",
        value: "淮南",
      },
      {
        label: "黄山",
        value: "黄山",
      },
      {
        label: "六安",
        value: "六安",
      },
      {
        label: "马鞍山",
        value: "马鞍山",
      },
      {
        label: "宿州",
        value: "宿州",
      },
      {
        label: "铜陵",
        value: "铜陵",
      },
      {
        label: "芜湖",
        value: "芜湖",
      },
      {
        label: "宣城",
        value: "宣城",
      },
    ],
  },
  {
    label: "澳门",
    value: "澳门",
    children: [
      {
        label: "澳门",
        value: "澳门",
      },
    ],
  },
  {
    label: "北京",
    value: "北京",
    children: [
      {
        label: "昌平",
        value: "昌平",
      },
      {
        label: "朝阳区",
        value: "朝阳区",
      },
      {
        label: "崇文",
        value: "崇文",
      },
      {
        label: "大兴",
        value: "大兴",
      },
      {
        label: "东城",
        value: "东城",
      },
      {
        label: "房山",
        value: "房山",
      },
      {
        label: "丰台",
        value: "丰台",
      },
      {
        label: "海淀",
        value: "海淀",
      },
      {
        label: "怀柔",
        value: "怀柔",
      },
      {
        label: "门头沟",
        value: "门头沟",
      },
      {
        label: "密云",
        value: "密云",
      },
      {
        label: "平谷",
        value: "平谷",
      },
      {
        label: "石景山",
        value: "石景山",
      },
      {
        label: "顺义",
        value: "顺义",
      },
      {
        label: "通州区",
        value: "通州区",
      },
      {
        label: "西城",
        value: "西城",
      },
      {
        label: "宣武",
        value: "宣武",
      },
      {
        label: "延庆",
        value: "延庆",
      },
    ],
  },
  {
    label: "福建",
    value: "福建",
    children: [
      {
        label: "福州",
        value: "福州",
      },
      {
        label: "龙岩",
        value: "龙岩",
      },
      {
        label: "南平",
        value: "南平",
      },
      {
        label: "宁德",
        value: "宁德",
      },
      {
        label: "莆田",
        value: "莆田",
      },
      {
        label: "泉州",
        value: "泉州",
      },
      {
        label: "三明",
        value: "三明",
      },
      {
        label: "厦门",
        value: "厦门",
      },
      {
        label: "漳州",
        value: "漳州",
      },
    ],
  },
  {
    label: "甘肃",
    value: "甘肃",
    children: [
      {
        label: "兰州",
        value: "兰州",
      },
      {
        label: "白银",
        value: "白银",
      },
      {
        label: "定西",
        value: "定西",
      },
      {
        label: "甘南",
        value: "甘南",
      },
      {
        label: "嘉峪关",
        value: "嘉峪关",
      },
      {
        label: "金昌",
        value: "金昌",
      },
      {
        label: "酒泉",
        value: "酒泉",
      },
      {
        label: "临夏",
        value: "临夏",
      },
      {
        label: "陇南",
        value: "陇南",
      },
      {
        label: "平凉",
        value: "平凉",
      },
      {
        label: "庆阳",
        value: "庆阳",
      },
      {
        label: "天水",
        value: "天水",
      },
      {
        label: "武威",
        value: "武威",
      },
      {
        label: "张掖",
        value: "张掖",
      },
    ],
  },
  {
    label: "广东",
    value: "广东",
    children: [
      {
        label: "广州",
        value: "广州",
      },
      {
        label: "潮州",
        value: "潮州",
      },
      {
        label: "东莞",
        value: "东莞",
      },
      {
        label: "佛山",
        value: "佛山",
      },
      {
        label: "河源",
        value: "河源",
      },
      {
        label: "惠州",
        value: "惠州",
      },
      {
        label: "江门",
        value: "江门",
      },
      {
        label: "揭阳",
        value: "揭阳",
      },
      {
        label: "茂名",
        value: "茂名",
      },
      {
        label: "梅州",
        value: "梅州",
      },
      {
        label: "清远",
        value: "清远",
      },
      {
        label: "汕头",
        value: "汕头",
      },
      {
        label: "汕尾",
        value: "汕尾",
      },
      {
        label: "韶关",
        value: "韶关",
      },
      {
        label: "深圳",
        value: "深圳",
      },
      {
        label: "阳江",
        value: "阳江",
      },
      {
        label: "云浮",
        value: "云浮",
      },
      {
        label: "湛江",
        value: "湛江",
      },
      {
        label: "肇庆",
        value: "肇庆",
      },
      {
        label: "中山",
        value: "中山",
      },
      {
        label: "珠海",
        value: "珠海",
      },
    ],
  },
  {
    label: "广西",
    value: "广西",
    children: [
      {
        label: "桂林",
        value: "桂林",
      },
      {
        label: "百色",
        value: "百色",
      },
      {
        label: "北海",
        value: "北海",
      },
      {
        label: "崇左",
        value: "崇左",
      },
      {
        label: "防城港",
        value: "防城港",
      },
      {
        label: "贵港",
        value: "贵港",
      },
      {
        label: "河池",
        value: "河池",
      },
      {
        label: "贺州",
        value: "贺州",
      },
      {
        label: "来宾",
        value: "来宾",
      },
      {
        label: "柳州",
        value: "柳州",
      },
      {
        label: "南宁",
        value: "南宁",
      },
      {
        label: "钦州",
        value: "钦州",
      },
      {
        label: "梧州",
        value: "梧州",
      },
      {
        label: "玉林",
        value: "玉林",
      },
    ],
  },
  {
    label: "贵州",
    value: "贵州",
    children: [
      {
        label: "贵阳",
        value: "贵阳",
      },
      {
        label: "安顺",
        value: "安顺",
      },
      {
        label: "毕节",
        value: "毕节",
      },
      {
        label: "六盘水",
        value: "六盘水",
      },
      {
        label: "黔东南",
        value: "黔东南",
      },
      {
        label: "黔南",
        value: "黔南",
      },
      {
        label: "黔西南",
        value: "黔西南",
      },
      {
        label: "铜仁",
        value: "铜仁",
      },
      {
        label: "遵义",
        value: "遵义",
      },
    ],
  },
  {
    label: "海南",
    value: "海南",
    children: [
      {
        label: "海口",
        value: "海口",
      },
      {
        label: "白沙",
        value: "白沙",
      },
      {
        label: "保亭",
        value: "保亭",
      },
      {
        label: "昌江",
        value: "昌江",
      },
      {
        label: "澄迈",
        value: "澄迈",
      },
      {
        label: "儋州",
        value: "儋州",
      },
      {
        label: "定安",
        value: "定安",
      },
      {
        label: "东方",
        value: "东方",
      },
      {
        label: "乐东",
        value: "乐东",
      },
      {
        label: "临高",
        value: "临高",
      },
      {
        label: "陵水",
        value: "陵水",
      },
      {
        label: "南沙群岛",
        value: "南沙群岛",
      },
      {
        label: "琼海",
        value: "琼海",
      },
      {
        label: "琼中",
        value: "琼中",
      },
      {
        label: "三亚",
        value: "三亚",
      },
      {
        label: "屯昌",
        value: "屯昌",
      },
      {
        label: "万宁",
        value: "万宁",
      },
      {
        label: "文昌",
        value: "文昌",
      },
      {
        label: "五指山",
        value: "五指山",
      },
      {
        label: "西沙群岛",
        value: "西沙群岛",
      },
      {
        label: "中沙群岛",
        value: "中沙群岛",
      },
    ],
  },
  {
    label: "河北",
    value: "河北",
    children: [
      {
        label: "石家庄",
        value: "石家庄",
      },
      {
        label: "保定",
        value: "保定",
      },
      {
        label: "沧州",
        value: "沧州",
      },
      {
        label: "承德",
        value: "承德",
      },
      {
        label: "邯郸",
        value: "邯郸",
      },
      {
        label: "衡水",
        value: "衡水",
      },
      {
        label: "廊坊",
        value: "廊坊",
      },
      {
        label: "秦皇岛",
        value: "秦皇岛",
      },
      {
        label: "唐山",
        value: "唐山",
      },
      {
        label: "邢台",
        value: "邢台",
      },
      {
        label: "张家口",
        value: "张家口",
      },
    ],
  },
  {
    label: "河南",
    value: "河南",
    children: [
      {
        label: "郑州",
        value: "郑州",
      },
      {
        label: "安阳",
        value: "安阳",
      },
      {
        label: "鹤壁",
        value: "鹤壁",
      },
      {
        label: "焦作",
        value: "焦作",
      },
      {
        label: "济源",
        value: "济源",
      },
      {
        label: "开封",
        value: "开封",
      },
      {
        label: "洛阳",
        value: "洛阳",
      },
      {
        label: "漯河",
        value: "漯河",
      },
      {
        label: "南阳",
        value: "南阳",
      },
      {
        label: "平顶山",
        value: "平顶山",
      },
      {
        label: "濮阳",
        value: "濮阳",
      },
      {
        label: "三门峡",
        value: "三门峡",
      },
      {
        label: "商丘",
        value: "商丘",
      },
      {
        label: "新乡",
        value: "新乡",
      },
      {
        label: "信阳",
        value: "信阳",
      },
      {
        label: "许昌",
        value: "许昌",
      },
      {
        label: "周口",
        value: "周口",
      },
      {
        label: "驻马店",
        value: "驻马店",
      },
    ],
  },
  {
    label: "黑龙江",
    value: "黑龙江",
    children: [
      {
        label: "哈尔滨",
        value: "哈尔滨",
      },
      {
        label: "大庆",
        value: "大庆",
      },
      {
        label: "大兴安岭",
        value: "大兴安岭",
      },
      {
        label: "鹤岗",
        value: "鹤岗",
      },
      {
        label: "黑河",
        value: "黑河",
      },
      {
        label: "鸡西",
        value: "鸡西",
      },
      {
        label: "佳木斯",
        value: "佳木斯",
      },
      {
        label: "牡丹江",
        value: "牡丹江",
      },
      {
        label: "七台河",
        value: "七台河",
      },
      {
        label: "齐齐哈尔",
        value: "齐齐哈尔",
      },
      {
        label: "双鸭山",
        value: "双鸭山",
      },
      {
        label: "绥化",
        value: "绥化",
      },
      {
        label: "伊春",
        value: "伊春",
      },
    ],
  },
  {
    label: "湖北",
    value: "湖北",
    children: [
      {
        label: "武汉",
        value: "武汉",
      },
      {
        label: "鄂州",
        value: "鄂州",
      },
      {
        label: "恩施",
        value: "恩施",
      },
      {
        label: "黄冈",
        value: "黄冈",
      },
      {
        label: "黄石",
        value: "黄石",
      },
      {
        label: "荆门",
        value: "荆门",
      },
      {
        label: "荆州",
        value: "荆州",
      },
      {
        label: "潜江",
        value: "潜江",
      },
      {
        label: "神农架",
        value: "神农架",
      },
      {
        label: "十堰",
        value: "十堰",
      },
      {
        label: "随州",
        value: "随州",
      },
      {
        label: "天门",
        value: "天门",
      },
      {
        label: "仙桃",
        value: "仙桃",
      },
      {
        label: "咸宁",
        value: "咸宁",
      },
      {
        label: "襄樊",
        value: "襄樊",
      },
      {
        label: "孝感",
        value: "孝感",
      },
      {
        label: "宜昌",
        value: "宜昌",
      },
    ],
  },
  {
    label: "湖南",
    value: "湖南",
    children: [
      {
        label: "长沙",
        value: "长沙",
      },
      {
        label: "常德",
        value: "常德",
      },
      {
        label: "郴州",
        value: "郴州",
      },
      {
        label: "衡阳",
        value: "衡阳",
      },
      {
        label: "怀化",
        value: "怀化",
      },
      {
        label: "娄底",
        value: "娄底",
      },
      {
        label: "邵阳",
        value: "邵阳",
      },
      {
        label: "湘潭",
        value: "湘潭",
      },
      {
        label: "湘西",
        value: "湘西",
      },
      {
        label: "益阳",
        value: "益阳",
      },
      {
        label: "永州",
        value: "永州",
      },
      {
        label: "岳阳",
        value: "岳阳",
      },
      {
        label: "张家界",
        value: "张家界",
      },
      {
        label: "株洲",
        value: "株洲",
      },
    ],
  },
  {
    label: "吉林",
    value: "吉林",
    children: [
      {
        label: "长春",
        value: "长春",
      },
      {
        label: "白城",
        value: "白城",
      },
      {
        label: "白山",
        value: "白山",
      },
      {
        label: "吉林",
        value: "吉林",
      },
      {
        label: "辽源",
        value: "辽源",
      },
      {
        label: "四平",
        value: "四平",
      },
      {
        label: "松原",
        value: "松原",
      },
      {
        label: "通化",
        value: "通化",
      },
      {
        label: "延边",
        value: "延边",
      },
    ],
  },
  {
    label: "江苏",
    value: "江苏",
    children: [
      {
        label: "南京",
        value: "南京",
      },
      {
        label: "常州",
        value: "常州",
      },
      {
        label: "淮安",
        value: "淮安",
      },
      {
        label: "连云港",
        value: "连云港",
      },
      {
        label: "南通",
        value: "南通",
      },
      {
        label: "苏州",
        value: "苏州",
      },
      {
        label: "宿迁",
        value: "宿迁",
      },
      {
        label: "泰州",
        value: "泰州",
      },
      {
        label: "无锡",
        value: "无锡",
      },
      {
        label: "徐州",
        value: "徐州",
      },
      {
        label: "盐城",
        value: "盐城",
      },
      {
        label: "扬州",
        value: "扬州",
      },
      {
        label: "镇江",
        value: "镇江",
      },
    ],
  },
  {
    label: "江西",
    value: "江西",
    children: [
      {
        label: "南昌",
        value: "南昌",
      },
      {
        label: "抚州",
        value: "抚州",
      },
      {
        label: "赣州",
        value: "赣州",
      },
      {
        label: "吉安",
        value: "吉安",
      },
      {
        label: "景德镇",
        value: "景德镇",
      },
      {
        label: "九江",
        value: "九江",
      },
      {
        label: "萍乡",
        value: "萍乡",
      },
      {
        label: "上饶",
        value: "上饶",
      },
      {
        label: "新余",
        value: "新余",
      },
      {
        label: "宜春",
        value: "宜春",
      },
      {
        label: "鹰潭",
        value: "鹰潭",
      },
    ],
  },
  {
    label: "辽宁",
    value: "辽宁",
    children: [
      {
        label: "沈阳",
        value: "沈阳",
      },
      {
        label: "鞍山",
        value: "鞍山",
      },
      {
        label: "本溪",
        value: "本溪",
      },
      {
        label: "朝阳市",
        value: "朝阳市",
      },
      {
        label: "大连",
        value: "大连",
      },
      {
        label: "丹东",
        value: "丹东",
      },
      {
        label: "抚顺",
        value: "抚顺",
      },
      {
        label: "阜新",
        value: "阜新",
      },
      {
        label: "葫芦岛",
        value: "葫芦岛",
      },
      {
        label: "锦州",
        value: "锦州",
      },
      {
        label: "辽阳",
        value: "辽阳",
      },
      {
        label: "盘锦",
        value: "盘锦",
      },
      {
        label: "铁岭",
        value: "铁岭",
      },
      {
        label: "营口",
        value: "营口",
      },
    ],
  },
  {
    label: "内蒙古",
    value: "内蒙古",
    children: [
      {
        label: "呼和浩特",
        value: "呼和浩特",
      },
      {
        label: "阿拉善",
        value: "阿拉善",
      },
      {
        label: "巴彦淖尔",
        value: "巴彦淖尔",
      },
      {
        label: "包头",
        value: "包头",
      },
      {
        label: "赤峰",
        value: "赤峰",
      },
      {
        label: "鄂尔多斯",
        value: "鄂尔多斯",
      },
      {
        label: "呼伦贝尔",
        value: "呼伦贝尔",
      },
      {
        label: "通辽",
        value: "通辽",
      },
      {
        label: "乌海",
        value: "乌海",
      },
      {
        label: "乌兰察布",
        value: "乌兰察布",
      },
      {
        label: "锡林郭勒",
        value: "锡林郭勒",
      },
      {
        label: "兴安",
        value: "兴安",
      },
    ],
  },
  {
    label: "宁夏",
    value: "宁夏",
    children: [
      {
        label: "银川",
        value: "银川",
      },
      {
        label: "固原",
        value: "固原",
      },
      {
        label: "石嘴山",
        value: "石嘴山",
      },
      {
        label: "吴忠",
        value: "吴忠",
      },
      {
        label: "中卫",
        value: "中卫",
      },
    ],
  },
  {
    label: "青海",
    value: "青海",
    children: [
      {
        label: "西宁",
        value: "西宁",
      },
      {
        label: "果洛",
        value: "果洛",
      },
      {
        label: "海北",
        value: "海北",
      },
      {
        label: "海东",
        value: "海东",
      },
      {
        label: "海南",
        value: "海南",
      },
      {
        label: "海西",
        value: "海西",
      },
      {
        label: "黄南",
        value: "黄南",
      },
      {
        label: "玉树",
        value: "玉树",
      },
    ],
  },
  {
    label: "山东",
    value: "山东",
    children: [
      {
        label: "济南",
        value: "济南",
      },
      {
        label: "滨州",
        value: "滨州",
      },
      {
        label: "德州",
        value: "德州",
      },
      {
        label: "东营",
        value: "东营",
      },
      {
        label: "菏泽",
        value: "菏泽",
      },
      {
        label: "济宁",
        value: "济宁",
      },
      {
        label: "莱芜",
        value: "莱芜",
      },
      {
        label: "聊城",
        value: "聊城",
      },
      {
        label: "临沂",
        value: "临沂",
      },
      {
        label: "青岛",
        value: "青岛",
      },
      {
        label: "日照",
        value: "日照",
      },
      {
        label: "泰安",
        value: "泰安",
      },
      {
        label: "威海",
        value: "威海",
      },
      {
        label: "潍坊",
        value: "潍坊",
      },
      {
        label: "烟台",
        value: "烟台",
      },
      {
        label: "枣庄",
        value: "枣庄",
      },
      {
        label: "淄博",
        value: "淄博",
      },
    ],
  },
  {
    label: "山西",
    value: "山西",
    children: [
      {
        label: "太原",
        value: "太原",
      },
      {
        label: "长治",
        value: "长治",
      },
      {
        label: "大同",
        value: "大同",
      },
      {
        label: "晋城",
        value: "晋城",
      },
      {
        label: "晋中",
        value: "晋中",
      },
      {
        label: "临汾",
        value: "临汾",
      },
      {
        label: "吕梁",
        value: "吕梁",
      },
      {
        label: "朔州",
        value: "朔州",
      },
      {
        label: "忻州",
        value: "忻州",
      },
      {
        label: "阳泉",
        value: "阳泉",
      },
      {
        label: "运城",
        value: "运城",
      },
    ],
  },
  {
    label: "陕西",
    value: "陕西",
    children: [
      {
        label: "西安",
        value: "西安",
      },
      {
        label: "安康",
        value: "安康",
      },
      {
        label: "宝鸡",
        value: "宝鸡",
      },
      {
        label: "汉中",
        value: "汉中",
      },
      {
        label: "商洛",
        value: "商洛",
      },
      {
        label: "铜川",
        value: "铜川",
      },
      {
        label: "渭南",
        value: "渭南",
      },
      {
        label: "咸阳",
        value: "咸阳",
      },
      {
        label: "延安",
        value: "延安",
      },
      {
        label: "榆林",
        value: "榆林",
      },
    ],
  },
  {
    label: "上海",
    value: "上海",
    children: [
      {
        label: "宝山",
        value: "宝山",
      },
      {
        label: "长宁",
        value: "长宁",
      },
      {
        label: "崇明",
        value: "崇明",
      },
      {
        label: "奉贤",
        value: "奉贤",
      },
      {
        label: "虹口",
        value: "虹口",
      },
      {
        label: "黄浦",
        value: "黄浦",
      },
      {
        label: "嘉定",
        value: "嘉定",
      },
      {
        label: "金山",
        value: "金山",
      },
      {
        label: "静安",
        value: "静安",
      },
      {
        label: "卢湾",
        value: "卢湾",
      },
      {
        label: "闵行",
        value: "闵行",
      },
      {
        label: "南汇",
        value: "南汇",
      },
      {
        label: "浦东",
        value: "浦东",
      },
      {
        label: "普陀",
        value: "普陀",
      },
      {
        label: "青浦",
        value: "青浦",
      },
      {
        label: "松江",
        value: "松江",
      },
      {
        label: "徐汇",
        value: "徐汇",
      },
      {
        label: "杨浦",
        value: "杨浦",
      },
      {
        label: "闸北",
        value: "闸北",
      },
    ],
  },
  {
    label: "四川",
    value: "四川",
    children: [
      {
        label: "成都",
        value: "成都",
      },
      {
        label: "阿坝",
        value: "阿坝",
      },
      {
        label: "巴中",
        value: "巴中",
      },
      {
        label: "达州",
        value: "达州",
      },
      {
        label: "德阳",
        value: "德阳",
      },
      {
        label: "甘孜",
        value: "甘孜",
      },
      {
        label: "广安",
        value: "广安",
      },
      {
        label: "广元",
        value: "广元",
      },
      {
        label: "乐山",
        value: "乐山",
      },
      {
        label: "凉山",
        value: "凉山",
      },
      {
        label: "泸州",
        value: "泸州",
      },
      {
        label: "眉山",
        value: "眉山",
      },
      {
        label: "绵阳",
        value: "绵阳",
      },
      {
        label: "内江",
        value: "内江",
      },
      {
        label: "南充",
        value: "南充",
      },
      {
        label: "攀枝花",
        value: "攀枝花",
      },
      {
        label: "遂宁",
        value: "遂宁",
      },
      {
        label: "雅安",
        value: "雅安",
      },
      {
        label: "宜宾",
        value: "宜宾",
      },
      {
        label: "资阳",
        value: "资阳",
      },
      {
        label: "自贡",
        value: "自贡",
      },
    ],
  },
  {
    label: "台湾",
    value: "台湾",
    children: [
      {
        label: "台北",
        value: "台北",
      },
      {
        label: "阿莲",
        value: "阿莲",
      },
      {
        label: "安定",
        value: "安定",
      },
      {
        label: "安平",
        value: "安平",
      },
      {
        label: "八德",
        value: "八德",
      },
      {
        label: "八里",
        value: "八里",
      },
      {
        label: "白沙市",
        value: "白沙市",
      },
      {
        label: "板桥",
        value: "板桥",
      },
      {
        label: "褒忠",
        value: "褒忠",
      },
      {
        label: "宝山市",
        value: "宝山市",
      },
      {
        label: "卑南",
        value: "卑南",
      },
      {
        label: "北斗",
        value: "北斗",
      },
      {
        label: "北港",
        value: "北港",
      },
      {
        label: "北门",
        value: "北门",
      },
      {
        label: "北埔",
        value: "北埔",
      },
      {
        label: "北投",
        value: "北投",
      },
      {
        label: "补子",
        value: "补子",
      },
      {
        label: "布袋",
        value: "布袋",
      },
      {
        label: "草屯",
        value: "草屯",
      },
      {
        label: "长宾",
        value: "长宾",
      },
      {
        label: "长治市",
        value: "长治市",
      },
      {
        label: "潮州市",
        value: "潮州市",
      },
      {
        label: "车城",
        value: "车城",
      },
      {
        label: "成功",
        value: "成功",
      },
      {
        label: "城中区",
        value: "城中区",
      },
      {
        label: "池上",
        value: "池上",
      },
      {
        label: "春日",
        value: "春日",
      },
      {
        label: "刺桐",
        value: "刺桐",
      },
      {
        label: "高雄",
        value: "高雄",
      },
      {
        label: "花莲",
        value: "花莲",
      },
      {
        label: "基隆",
        value: "基隆",
      },
      {
        label: "嘉义",
        value: "嘉义",
      },
      {
        label: "苗栗",
        value: "苗栗",
      },
      {
        label: "南投",
        value: "南投",
      },
      {
        label: "屏东",
        value: "屏东",
      },
      {
        label: "台东",
        value: "台东",
      },
      {
        label: "台南",
        value: "台南",
      },
      {
        label: "台中",
        value: "台中",
      },
      {
        label: "桃园",
        value: "桃园",
      },
      {
        label: "新竹",
        value: "新竹",
      },
      {
        label: "å®兰",
        value: "宜兰",
      },
      {
        label: "彰化",
        value: "彰化",
      },
    ],
  },
  {
    label: "天津",
    value: "天津",
    children: [
      {
        label: "宝坻",
        value: "宝坻",
      },
      {
        label: "北辰",
        value: "北辰",
      },
      {
        label: "大港",
        value: "大港",
      },
      {
        label: "东丽",
        value: "东丽",
      },
      {
        label: "汉沽",
        value: "汉沽",
      },
      {
        label: "和平",
        value: "和平",
      },
      {
        label: "河北",
        value: "河北",
      },
      {
        label: "河东",
        value: "河东",
      },
      {
        label: "河西",
        value: "河西",
      },
      {
        label: "红桥",
        value: "红桥",
      },
      {
        label: "蓟县",
        value: "蓟县",
      },
      {
        label: "津南",
        value: "津南",
      },
      {
        label: "静海",
        value: "静海",
      },
      {
        label: "南开",
        value: "南开",
      },
      {
        label: "宁河",
        value: "宁河",
      },
      {
        label: "塘沽",
        value: "塘沽",
      },
      {
        label: "武清",
        value: "武清",
      },
      {
        label: "西青",
        value: "西青",
      },
    ],
  },
  {
    label: "西藏",
    value: "西藏",
    children: [
      {
        label: "拉萨",
        value: "拉萨",
      },
      {
        label: "阿里",
        value: "阿里",
      },
      {
        label: "昌都",
        value: "昌都",
      },
      {
        label: "林芝",
        value: "林芝",
      },
      {
        label: "那曲",
        value: "那曲",
      },
      {
        label: "日喀则",
        value: "日喀则",
      },
      {
        label: "山南",
        value: "山南",
      },
    ],
  },
  {
    label: "香港",
    value: "香港",
    children: [
      {
        label: "北区",
        value: "北区",
      },
      {
        label: "大埔区",
        value: "大埔区",
      },
      {
        label: "东区",
        value: "东区",
      },
      {
        label: "观塘区",
        value: "观塘区",
      },
      {
        label: "黄大仙区",
        value: "黄大仙区",
      },
      {
        label: "九龙",
        value: "九龙",
      },
      {
        label: "葵青区",
        value: "葵青区",
      },
      {
        label: "离岛区",
        value: "离岛区",
      },
      {
        label: "南区",
        value: "南区",
      },
      {
        label: "荃湾区",
        value: "荃湾区",
      },
      {
        label: "沙田区",
        value: "沙田区",
      },
      {
        label: "深水湾",
        value: "深水湾",
      },
      {
        label: "屯门区",
        value: "屯门区",
      },
      {
        label: "湾仔区",
        value: "湾仔区",
      },
      {
        label: "西贡区",
        value: "西贡区",
      },
      {
        label: "香港",
        value: "香港",
      },
      {
        label: "新界",
        value: "新界",
      },
      {
        label: "油尖旺区",
        value: "油尖旺区",
      },
      {
        label: "元朗区",
        value: "元朗区",
      },
      {
        label: "中西区",
        value: "中西区",
      },
    ],
  },
  {
    label: "新疆",
    value: "新疆",
    children: [
      {
        label: "乌鲁木齐",
        value: "乌鲁木齐",
      },
      {
        label: "阿克苏",
        value: "阿克苏",
      },
      {
        label: "阿拉尔",
        value: "阿拉尔",
      },
      {
        label: "阿勒泰",
        value: "阿勒泰",
      },
      {
        label: "巴音郭楞",
        value: "巴音郭楞",
      },
      {
        label: "博尔塔拉",
        value: "博尔塔拉",
      },
      {
        label: "昌吉",
        value: "昌吉",
      },
      {
        label: "哈密",
        value: "哈密",
      },
      {
        label: "和田",
        value: "和田",
      },
      {
        label: "喀什",
        value: "喀什",
      },
      {
        label: "克拉玛依",
        value: "克拉玛依",
      },
      {
        label: "克孜勒苏柯尔克孜",
        value: "克孜勒苏柯尔克孜",
      },
      {
        label: "石河子",
        value: "石河子",
      },
      {
        label: "塔城",
        value: "塔城",
      },
      {
        label: "图木舒克",
        value: "图木舒克",
      },
      {
        label: "吐鲁番",
        value: "吐鲁番",
      },
      {
        label: "五家渠",
        value: "五家渠",
      },
      {
        label: "伊犁",
        value: "伊犁",
      },
    ],
  },
  {
    label: "云南",
    value: "云南",
    children: [
      {
        label: "昆明",
        value: "昆明",
      },
      {
        label: "保山",
        value: "保山",
      },
      {
        label: "楚雄",
        value: "楚雄",
      },
      {
        label: "大理",
        value: "大理",
      },
      {
        label: "德宏",
        value: "德宏",
      },
      {
        label: "迪庆",
        value: "迪庆",
      },
      {
        label: "红河",
        value: "红河",
      },
      {
        label: "丽江",
        value: "丽江",
      },
      {
        label: "临沧",
        value: "临沧",
      },
      {
        label: "怒江",
        value: "怒江",
      },
      {
        label: "曲靖",
        value: "曲靖",
      },
      {
        label: "思茅",
        value: "思茅",
      },
      {
        label: "文山",
        value: "文山",
      },
      {
        label: "西双版纳",
        value: "西双版纳",
      },
      {
        label: "玉溪",
        value: "玉溪",
      },
      {
        label: "昭通",
        value: "昭通",
      },
    ],
  },
  {
    label: "浙江",
    value: "浙江",
    children: [
      {
        label: "杭州",
        value: "杭州",
      },
      {
        label: "湖州",
        value: "湖州",
      },
      {
        label: "嘉兴",
        value: "嘉兴",
      },
      {
        label: "金华",
        value: "金华",
      },
      {
        label: "丽水",
        value: "丽水",
      },
      {
        label: "宁波",
        value: "宁波",
      },
      {
        label: "衢州",
        value: "衢州",
      },
      {
        label: "绍兴",
        value: "绍兴",
      },
      {
        label: "台州",
        value: "台州",
      },
      {
        label: "温州",
        value: "温州",
      },
      {
        label: "舟山",
        value: "舟山",
      },
    ],
  },
  {
    label: "重庆",
    value: "重庆",
    children: [
      {
        label: "巴南",
        value: "巴南",
      },
      {
        label: "北碚",
        value: "北碚",
      },
      {
        label: "璧山",
        value: "璧山",
      },
      {
        label: "长寿",
        value: "长寿",
      },
      {
        label: "城口",
        value: "城口",
      },
      {
        label: "大渡口",
        value: "大渡口",
      },
      {
        label: "大足",
        value: "大足",
      },
      {
        label: "垫江",
        value: "垫江",
      },
      {
        label: "丰都",
        value: "丰都",
      },
      {
        label: "奉节",
        value: "奉节",
      },
      {
        label: "涪陵",
        value: "涪陵",
      },
      {
        label: "合川",
        value: "合川",
      },
      {
        label: "江北",
        value: "江北",
      },
      {
        label: "江津",
        value: "江津",
      },
      {
        label: "九龙坡",
        value: "九龙坡",
      },
      {
        label: "开县",
        value: "开县",
      },
      {
        label: "梁平",
        value: "梁平",
      },
      {
        label: "南岸",
        value: "南岸",
      },
      {
        label: "南川",
        value: "南川",
      },
      {
        label: "彭水",
        value: "彭水",
      },
      {
        label: "綦江",
        value: "綦江",
      },
      {
        label: "黔江",
        value: "黔江",
      },
      {
        label: "荣昌",
        value: "荣昌",
      },
      {
        label: "沙坪坝",
        value: "沙坪坝",
      },
      {
        label: "石柱",
        value: "石柱",
      },
      {
        label: "双桥",
        value: "双桥",
      },
      {
        label: "铜梁",
        value: "铜梁",
      },
      {
        label: "潼南",
        value: "潼南",
      },
      {
        label: "万盛",
        value: "万盛",
      },
      {
        label: "万州",
        value: "万州",
      },
      {
        label: "巫山",
        value: "巫山",
      },
      {
        label: "巫溪",
        value: "巫溪",
      },
      {
        label: "武隆",
        value: "武隆",
      },
      {
        label: "秀山",
        value: "秀山",
      },
      {
        label: "永川",
        value: "永川",
      },
      {
        label: "酉阳",
        value: "酉阳",
      },
      {
        label: "渝北",
        value: "渝北",
      },
      {
        label: "渝中",
        value: "渝中",
      },
      {
        label: "云阳",
        value: "云阳",
      },
      {
        label: "忠县",
        value: "忠县",
      },
    ],
  },
  {
    label: "其他",
    value: "其他",
    children: [
      {
        label: "阿根廷",
        value: "阿根廷",
      },
      {
        label: "埃及",
        value: "埃及",
      },
      {
        label: "爱尔兰",
        value: "爱尔兰",
      },
      {
        label: "奥地利",
        value: "奥地利",
      },
      {
        label: "奥克兰",
        value: "奥克兰",
      },
      {
        label: "澳大利亚",
        value: "澳大利亚",
      },
      {
        label: "巴基斯坦",
        value: "巴基斯坦",
      },
      {
        label: "巴西",
        value: "巴西",
      },
      {
        label: "保加利亚",
        value: "保加利亚",
      },
      {
        label: "比利时",
        value: "比利时",
      },
      {
        label: "冰岛",
        value: "冰岛",
      },
      {
        label: "朝鲜",
        value: "朝鲜",
      },
      {
        label: "丹麦",
        value: "丹麦",
      },
      {
        label: "德国",
        value: "德国",
      },
      {
        label: "俄罗斯",
        value: "俄罗斯",
      },
      {
        label: "法国",
        value: "法国",
      },
      {
        label: "菲律宾",
        value: "菲律宾",
      },
      {
        label: "芬兰",
        value: "芬兰",
      },
      {
        label: "哥伦比亚",
        value: "哥伦比亚",
      },
      {
        label: "韩国",
        value: "韩国",
      },
      {
        label: "荷兰",
        value: "荷兰",
      },
      {
        label: "加拿大",
        value: "加拿大",
      },
      {
        label: "柬埔寨",
        value: "柬埔寨",
      },
      {
        label: "喀麦隆",
        value: "喀麦é",
      },
      {
        label: "老挝",
        value: "老挝",
      },
      {
        label: "卢森堡",
        value: "卢森堡",
      },
      {
        label: "罗马尼亚",
        value: "罗马尼亚",
      },
      {
        label: "马达加斯加",
        value: "马达加斯加",
      },
      {
        label: "马来西亚",
        value: "马来西亚",
      },
      {
        label: "毛里求斯",
        value: "毛里求斯",
      },
      {
        label: "美国",
        value: "美国",
      },
      {
        label: "秘鲁",
        value: "秘鲁",
      },
      {
        label: "缅甸",
        value: "缅甸",
      },
      {
        label: "墨西哥",
        value: "墨西哥",
      },
      {
        label: "南非",
        value: "南非",
      },
      {
        label: "尼泊尔",
        value: "尼泊尔",
      },
      {
        label: "挪威",
        value: "挪威",
      },
      {
        label: "葡萄牙",
        value: "葡萄牙",
      },
      {
        label: "其它地区",
        value: "其它地区",
      },
      {
        label: "日本",
        value: "日本",
      },
      {
        label: "瑞典",
        value: "瑞典",
      },
      {
        label: "瑞士",
        value: "瑞士",
      },
      {
        label: "斯里兰卡",
        value: "斯里兰卡",
      },
      {
        label: "泰国",
        value: "泰国",
      },
      {
        label: "土耳其",
        value: "土耳其",
      },
      {
        label: "委内瑞拉",
        value: "委内瑞拉",
      },
      {
        label: "文莱",
        value: "文莱",
      },
      {
        label: "乌克兰",
        value: "乌克兰",
      },
      {
        label: "西班牙",
        value: "西班牙",
      },
      {
        label: "希腊",
        value: "希腊",
      },
      {
        label: "新加坡",
        value: "新加坡",
      },
      {
        label: "新西兰",
        value: "新西兰",
      },
      {
        label: "匈牙利",
        value: "匈牙利",
      },
      {
        label: "以色列",
        value: "以色列",
      },
      {
        label: "意大利",
        value: "意大利",
      },
      {
        label: "印度",
        value: "印度",
      },
      {
        label: "印度尼西亚",
        value: "印度尼西亚",
      },
      {
        label: "英国",
        value: "英国",
      },
      {
        label: "越南",
        value: "越南",
      },
      {
        label: "智利",
        value: "智利",
      },
    ],
  },
];
