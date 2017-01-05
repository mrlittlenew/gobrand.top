/**
 * Created by 10136 on 2016/6/14.
 */
$(document).ready(function () {
    //手机端缩放
    if($(".content .container").css("display") == "none"){
        var deviceWidth = $(window).width();
        var scale = deviceWidth/720;
        $('#wrapper').css('-webkit-transform-origin','top left').css('-webkit-transform',"scale("+scale+")");
    }
    //默认加载通讯数据
    var data = getTongxun();
    adaptData(data);
    $(".tab-item").click(function () {
        $(".tab-button").removeClass("select-button");
        backAll();
        $(this).children(".tab-button").addClass("select-button");
        var name = $(this).children(".tab-button").attr("data");
        switch (name){
            case 'tongxun-select':
                adaptData(getTongxun());
                break;
            case 'it-select':
                adaptData(getIt());
                break;
            case 'lingshou-select':
                adaptData(getLingshou());
                break;
            case 'dichan-select':
                adaptData(getDichan());
                break;
            case 'zonghe-select':
                adaptData(getZonghe());
                break;

        }
        $(this).children(".text").attr("src","top500_files/img/"+name+".png");
        if($(".content .container").css("display") == "none"){
            $(".content").fadeOut(function () {
                $(".content").slideDown(500);
            });
        }else {
            $(".content .container").fadeOut(function () {
                $(".content .container").slideDown(500);
            });
        }
    });
});
function backAll(){
    $(".text").eq(0).attr("src","top500_files/img/tongxun-text.png");
    $(".text").eq(1).attr("src","top500_files/img/it-text.png");
    $(".text").eq(2).attr("src","top500_files/img/lingshou-text.png");
    $(".text").eq(3).attr("src","top500_files/img/dichan-text.png");
    $(".text").eq(4).attr("src","top500_files/img/zonghe-text.png");
}
//通讯
function getTongxun(){
    var data = [];
    data.push(
        {
            'logo':'top500_files/img/zte-logo.png',
            'name':'中兴通讯',
            'detail':
                '中兴通讯是全球领先的综合通信解决方案提供商。公司通过为全球160多个国家和地区的电信' +
                '运营商和企业网客户提供创新技术与产品解决方案，让全世界用户享有语音、数据、多媒体、' +
                '无线宽带等全方位沟通。公司成立于1985年，在香港和深圳两地上市，是中国最大的通信设备' +
                '上市公司。在美国、法国、中国等地共设有20个全球研发机构； PCT专利申请量近5年均居' +
                '全球前三，公司依托分布于全球的107个分支机构，凭借不断增强的创新能力、灵活定制能力' +
                '赢得全球客户的信任与合作。',
            'site':'http://www.zte.com.cn/china',
            'employ':'http://job.zte.com.cn/cn/',
            'ma':'top500_files/img/zhongxing-ma.png',
        }
    );
    data.push(
        {
            'logo':'top500_files/img/vivo-logo.png',
            'name':'vivo',
            'detail':
                'vivo（维沃移动通信有限公司）是一家国际性的智能终端和移动互联网公司，在东莞、' +
                '深圳、南京、重庆、印度、印尼分别设立了研发中心和制造基地。vivo为一个专注于智能' +
                '手机领域的手机品牌，vivo和追求乐趣、充满活力、年轻时尚的群体一起打造拥有卓越外观、' +
                '专业级音质、极致影像、愉悦体验的智能产品，并将敢于追求极致、持续创造惊喜作为' +
                'vivo的坚定追求。',
            'site':'http://www.vivo.com.cn/',
            'employ':'http://hr.vivo.com.cn/',
            'ma':'top500_files/img/vivo-ma.jpg',
        }
    );
    data.push(
        {
            'logo':'top500_files/img/coolpad-logo.png',
            'name':'酷派集团',
            'detail':
                '酷派集团（香港主板上市公司，股票代码2369），是中国专业的智能手机终端、移动数据平台' +
                '系统、增值业务运营一体化解决方案提供商，专注于以智能手机为核心的无线数据一体化解决方案。' +
                '其中，全球首创的“CDMA/GSM双网双通终端”技术荣获国家科技进步二等奖，是迄今为止手机终端' +
                '技术领域所获得的最高奖项。同时，作为国家级重点软件企业，先后获得亚太区500强高科技企业、' +
                '中国高科技企业50强、中国电子信息100强等荣誉称号，并被国家授予“博士后科研工作站”。',
            'site':'http://www.coolpad.com',
            'employ':'',
            'ma':'top500_files/img/kupai-ma.jpg',
        }
    );
    data.push(
        {
            'logo':'top500_files/img/hytera-logo.png',
            'name':'海能达',
            'detail':
                '海能达（股票：002583.SZ）是全球领先的专网通信供应商，是极少数能同时提供PDT、 ' +
                'DMR、TETRA全系列产品及解决方案的企业，致力于政府与公共安全、公用事业、轨道交通和工商业等用户。' +
                ' 产品遍布全球 120 多个国家和地区，在全球设有 40多个分支机构，逾7成营收来自海外。' +
                '国内市场占有率稳坐第一，产品出货量在全球高居第二。',
            'site':'http://hytera.com.cn',
            'employ':'http://campus.51job.com/hytera/',
            'ma':'top500_files/img/hainengda-ma.jpg',
        }
    );
    data.push(
        {
            'logo':'top500_files/img/keyence-logo.png',
            'name':'基恩士',
            'detail':
                '基恩士创立于1974年，致力于推动工业自动化发展的全球性公司。作为自动化行业的优良企业，' +
                '一直以推广最先端技术的工业自动化控制产品为己任，不断研发、销售高附加价值的产品。' +
                '销售网络遍布全球40多个国家和地区。基恩士（中国）成立于2001年9月。目前发展到香港、' +
                '深圳、广州、苏州、上海、杭州、武汉、南京、无锡、北京、天津、大连、等12个地区拥有' +
                '营业所。',
            'site':'http://www.keyence.com.cn',
            'employ':'http://china.keyence.com/ss/career/index.jsp',
            'ma':'top500_files/img/jienshi-ma.jpg',
        }
    );
    data.push(
        {
            'logo':'top500_files/img/netposa-logo.png',
            'name':'东方网力',
            'detail':
                '东方网力科技股份有限公司（简称“东方网力”）成立于2000年9月，' +
                '于2014年1月29日在深圳证券交易所创业板上市，股票代码：300367。' +
                '作为北京地区首家上市的安防企业，公司上市一年后市值即突破百亿，增幅达10倍之多，' +
                '成为中国安防行业公司市值增长最快、最具投资价值的企业之一。',
            'site':'http://www.netposa.com',
            'employ':'http://sou.zhaopin.com/jobs/searchresult.ashx?jl=%E9%80%89%E6%8B%A9%E5%9C%B0%E5%8C%BA&kw=%E4%B8%9C%E6%96%B9%E7%BD%91%E5%8A%9B&p=1&isadv=0',
            'ma':'top500_files/img/dongfang-ma.jpg',
        }
    );
    return data;
}
//it
function getIt(){
    var data = [];
    data.push(
        {
            'logo':'top500_files/img/jd-logo.png',
            'name':'京东集团',
            'detail':
                '京东集团（JD.com）成立于2004年，目前已成长为中国最大的自营式电商企业，' +
                '2015年第三季度在中国自营式B2C电商市场的占有率为56.9%。2015年，京东集团市场交' +
                '易额达到4627亿元，同比增长78%，增速是行业平均增速的2倍。京东是中国收入规模最大' +
                '的互联网企业。2014年5月，京东集团在美国纳斯达克证券交易所正式挂牌上市，是中国第' +
                '一个成功赴美上市的大型综合型电商平台，并成功跻身全球前十大互联网公司排行榜。',
            'site':'http://www.jd.com',
            'employ':'http://campus.jd.com',
            'ma':'top500_files/img/jindong-ma.png',
        }
    );
    data.push(
        {
            'logo':'top500_files/img/jindie-logo.png',
            'name':'金蝶集团',
            'detail':
                '金蝶国际软件集团始创于1993年，是香港联交所主板上市公司（股票代码：0268）。' +
                '运用前沿科学技术，金蝶以管理信息化产品服务为核心，为超过500万家企业和政府组织' +
                '提供云管理产品及服务，是中国软件市场的领跑者。今天，已有超过2000家合作伙伴选择' +
                '金蝶作为共创共赢的发展平台。IDC权威数据显示，金蝶连续十一年位居中国中小企业市' +
                '场占有率第一。财富中国100强企业，一半选择金蝶。',
            'site':'http://www.kingdee.com',
            'employ':'',
            'ma':'top500_files/img/jindie-ma.jpg',
        }
    );
    data.push(
        {
            'logo':'top500_files/img/pingan-logo.png',
            'name':'平安科技',
            'detail':
                '平安科技（深圳）有限公司成立于2008年9月，是世界500强企业——中国平安保险（集团）' +
                '股份有限公司旗下全资子公司，其前身为平安集团的信息管理中心。公司总部设在深圳，上海、' +
                '成都、南京设有分公司，目前已拥有3000多名专业IT技术人员和IT管理专家。平安科技' +
                '的成立是平安集团在IT领域的里程碑事件之一，标志着中国平安向IT专业化领域迈进，' +
                '并开启“科技引领金融”的探索模式。',
            'site':'http://pingan.cn/index.shtml',
            'employ':'http://itjob.pingan.com/',
            'ma':'top500_files/img/pingan-ma.jpg',
        }
    );
    data.push(
        {
            'logo':'top500_files/img/tuniu-logo.png',
            'name':'途牛旅游',
            'detail':
                '途牛旅游网(www.tuniu.com)创建于2006年10月，总部设在南京，经过十年发展，' +
                '目前已成为中国在线旅游领先企业，下辖北京、上海、广州、深圳等170家分公司。' +
                '十年来，基于互联网+旅行社+呼叫中心的运营模式和注重客户体验的服务模式，' +
                '途牛旅游网一直以“为旅游者提供经济可靠的旅游产品”的形象示人，深受客户信赖。' +
                '凭借快速的业务发展和强大的行业资源整合能力，途牛于2014年5月9日登陆美国' +
                '纳斯达克（股票交易代码：TOUR），成功上市。',
            'site':'http://www.tuniu.com/',
            'employ':'http://tuniu.zhiye.com/home',
            'ma':'top500_files/img/tuniu-ma.jpg',
        }
    );
    data.push(
        {
            'logo':'top500_files/img/dongruan-logo.png',
            'name':'东软集团',
            'detail':
                '东软是一家面向全球提供IT解决方案与服务的公司，创立于1991年，目前拥有近20000名员工，' +
                '在中国建立了8个区域总部，10个软件研发基地， 16个软件开发与技术支持中心，在60多个' +
                '城市建立营销与服务网络; 在美国、日本、欧洲、中东、南美设有子公司。东软以软件技术' +
                '为核心，提供行业解决方案和产品工程解决方案以及相关软件产品、平台及服务。',
            'site':'http://www.neusoft.com/cn/',
            'employ':'http://talents.neusoft.com',
            'ma':'top500_files/img/dongruan-ma.jpg',
        }
    );
    data.push(
        {
            'logo':'top500_files/img/lujiang-logo.png',
            'name':'沪江',
            'detail':
                '沪江诞生于2001年，历经5年公益化运营后，自2006年开始公司化运营，现已成为拥有1400' +
                '名全职员工、2000名兼职员工、1.1亿用户的大型互联网教育企业，处于行业领军地位。沪江' +
                '是专业的互联网学习平台，致力于为用户提供便捷、优质的全方位网络学习产品和服务。自' +
                '成立以来，沪江打造了领先的学习资讯、学习社区、学习工具及学习平台四大业务体系。近期，' +
                '沪江主办的“沪江极客Show—全国大学生编程马拉松大赛”正在火热报名，热烈欢迎同学们参与！' +
                '报名链接：http://t.cn/R5o9s3ohttp://t.cn/R5o9s3o',
            'site':'http://www.hujiang.com/',
            'employ':'http://t.cn/R5o9s3o',
            'ma':'top500_files/img/lujiang-ma.png',
        }
    );
    return data;
}
//零售
function getLingshou(){
    var data = [];
    data.push(
        {
            'logo':'top500_files/img/gaolujie-logo.png',
            'name':'高露洁',
            'detail':
                '高露洁-棕榄是一家全球性的公司，拥有200多年的历史，产品销往世界上200多个国家。' +
                '我们提供一系列高质量的消费品，包括口腔护理、个人护理、家居护理和宠物营养。我们是' +
                '口腔护理，液洗及腋下护理的全球领导者。我们热情地履行价值观、关注战略优先、快速' +
                '完美执行，为人们提供知名的产品，使他们生活更健康，更快乐。',
            'site':'http://www.colgate.com.cn/app/Colgate/CN/HomePage.cvsp',
            'employ':'http://my.yingjiesheng.com/company_8261328.html',
            'ma':'top500_files/img/gaolujie-ma.jpg',
        }
    );
    data.push(
        {
            'logo':'top500_files/img/tangchen-logo.png',
            'name':'汤臣倍健',
            'detail':
                '“若干年后，当人们谈论起汤臣倍健，或许已经忘记她是哪个国家的，汤臣倍健汇聚了全球' +
                '营养品的精髓，是营养品的‘联合国’。”汤臣倍健创立于1995年10月，2002年系统地将膳食' +
                '补充剂引入中国非直销领域，并迅速成长为中国膳食补充剂领导品牌和标杆企业，也是中国' +
                '保健行业第一家AAA信用等级企业。2010年8月，国际篮球巨星姚明签约成为汤臣倍健的' +
                '形象代言人，同年12月15日，汤臣倍健（股票代码：300146）在深圳交易所创业板挂牌上市。',
            'site':'http://www.by-health.com/',
            'employ':'',
            'ma':'top500_files/img/tangchen-ma.jpg',
        }
    );
    data.push(
        {
            'logo':'top500_files/img/libai-logo.png',
            'name':'立白集团',
            'detail':
                '广州立白企业集团有限公司是国内日化龙头企业，创建于1994年，总部位于广州市。' +
                '主营民生离不开的日化产品，产品范围涵盖“织物洗护、餐具洗涤、消杀、家居清洁、' +
                '空气清新、口腔护理、身体清洁、头发护理、肌肤护理及化妆品”等九大类几百个品种，' +
                '营销网络星罗棋布，遍布全国各省（区）、直辖市。立白近年来均保持较快增长速度，' +
                '全集团年销售收入一百多亿元，洗涤剂销量全国第一、世界第四。立白在全国各地已拥有' +
                '十三大生产基地、三十多家分公司、二十多家委外加工厂，员工一万多人。',
            'site':'http://www.liby.com.cn',
            'employ':'http://www.hotjob.cn/wt/Liby/web/index?brandCode=1',
            'ma':'top500_files/img/libai-ma.jpg',
        }
    );
    data.push(
        {
            'logo':'top500_files/img/yongwang-logo.png',
            'name':'永旺',
            'detail':
                '永旺为日本综合零售及服务企业集团。主要以经营购物中心、综合零售业（综合百货超市、' +
                '食品超市）为主，还从事专卖店、金融服务、物业服务、便利店等业务。 至今在日本国内外' +
                '拥有约300家以上的企业、近18,740家店铺，主要分布在日本、中国、东南亚。截止至2015' +
                '年2月底永旺拥有综合百货超市618 家，食品超市2,030家。2015年《财富》全球500强排名' +
                '147名。',
            'site':'http://www.aeonchina.com.cn',
            'employ':'http://campus.51job.com/Aeonchina',
            'ma':'top500_files/img/yongwang-ma.jpg',
        }
    );
    data.push(
        {
            'logo':'top500_files/img/luzhou-logo.png',
            'name':'泸州老窖',
            'detail':
                '泸州老窖股份有限公司是在明清36家古老酿酒作坊群的基础上，发展起来的大型国有' +
                '上市公司（股票代码：000568）。泸州老窖以白酒产业为依托，以其独特的优势在中国' +
                '酒业中独树一帜，占据着不可动摇的地位。泸州老窖始终以“做中华酒业巨子，成中华酒' +
                '文化旗手” 为企业愿景，坚持以市场为中心，以质量为根本，以管理为后盾，以人才为资本，' +
                '以发展为目标，牢牢站稳中国白酒第一集团军的位置，立志成为全球酒精饮料行业的航空母舰。',
            'site':'http://www.lzlj.com',
            'employ':'http://www.lzlj.com/join/join_list.html',
            'ma':'top500_files/img/luzhou-ma.jpg',
        }
    );
    data.push(
        {
            'logo':'top500_files/img/taiji-logo.png',
            'name':'太极股份',
            'detail':
                '太极计算机股份有限公司是中国电子科技集团公司骨干企业，全国信息系统集成特一级资质' +
                '企业，首批信息系统运维服务一级资质企业。公司成立于1987年，2002年整体改制为股份' +
                '公司，2010年在深交所中小板上市。太极是我国重大信息系统总体设计和工程建设的主要承' +
                '担者，是国家电子政务政策和标准制定的主要参与者，是党政、国防、公共安全、能源、交' +
                '通等行业信息化和智慧城市建设的领先企业。',
            'site':'http://www.taiji.com.cn',
            'employ':'http://www.taiji.com.cn/join_us/Campus/index.htm',
            'ma':'top500_files/img/taiji-ma.png',
        }
    );
    return data;
}
//地产
function getDichan(){
    var data = [];
    data.push(
        {
            'logo':'top500_files/img/zhongliang-logo.png',
            'name':'中粮地产酒店',
            'detail':
                '中粮集团从事地产酒店开发业务已有20多年的历史，业务覆盖商业地产、住宅地产、酒店、旅游地' +
                '产及区域综合开发等多种业态，并逐步完成了全国性的战略布局，构建了业态丰富、产品类型' +
                '完善、资产结构均衡的宏伟地产版图。作为中粮集团成员企业之一，中粮集团有两个地产酒店' +
                '业务上市平台，分别是：香港联交所上市的大悦城地产(00207.HK)及境内A股上市的中粮地产(000031.SZ)。',
            'site':'http://www.cofco-property.cn/',
            'employ':'http://cofcoland.zhiye.com/home',
            'ma':'top500_files/img/zhongliang-ma.jpg',
        }
    );
    data.push(
        {
            'logo':'top500_files/img/shidai-logo.png',
            'name':'时代地产',
            'detail':
                '时代地产，成立于1999年，中国房地产50强，中国财富500强，香港联合交易所上市企业' +
                '（股票代码：01233.HK）。目前主营业务为住宅产品、商业配套、创意办公的开发及物业服务。' +
                '截止2014年，总资产已超300亿元人民币。作为地产界中的生活艺术家，时代地产将继续' +
                '奉行“爱、专注、创造”的核心价值观，从品质到品位，从地产到超越地产，逐步发展' +
                '成为中国最优秀的房地产企业，让更多人实现向往的生活。',
            'site':'http://www.timesgroup.cn/',
            'employ':'http://timesgroup.zhaopin.com/',
            'ma':'top500_files/img/shidai-ma.png',
        }
    );
    data.push(
        {
            'logo':'top500_files/img/dongzhi-logo.png',
            'name':'东芝医疗',
            'detail':
                '东芝医疗系统集团，以(Made for Life) 为经营口号，' +
                '一直致力于为世界各地用户的医疗、健康做贡献，开展全球业务。东芝自1914 年进入医疗行业以来，' +
                '不断推出现代医疗不可或缺的、高品质、高附加值的医疗设备，经过百年的发展，已经拥有CT、X光机、' +
                'MRI（磁共振）、US（超声）、CL(生化分析仪器)等最前沿医用影像系列产品，产品遍布日本、' +
                '美国、中国、欧洲各国等 135个国家及地区,成为世界主要医学影像产品厂商之一。',
            'site':'http://www.toshiba-medical.com.cn',
            'employ':'',
            'ma':'top500_files/img/dongzhi-ma.png',
        }
    );
    data.push(
        {
            'logo':'top500_files/img/libang-logo.png',
            'name':'理邦仪器',
            'detail':
                '理邦仪器立足健康产业，以全球化的视野、持续的创新和卓越的服务，成为国内规模最大的医疗' +
                '健康产品、解决方案和服务提供商之一。在中国，理邦辐射全国市场的服务网络已为超过17000' +
                ' 家医疗机构提供了创新型、高品质的产品和服务。在全球设立五大研发中心、14 个子公司，产品' +
                '远销150 多个国家和地区。全球医疗专家信赖理邦突破性的医疗技术和出色的客户服务。（股票代码：300206）',
            'site':'http://www.edan.com.cn/',
            'employ':'http://www.wintalent.cn/wt/szedan/web/index',
            'ma':'top500_files/img/libang-ma.jpg',
        }
    );
    data.push(
        {
            'logo':'top500_files/img/huada-logo.png',
            'name':'华大基因',
            'detail':
                '华大基因成立于1999年，是全球最大的基因组学研发机构。华大基因以“产学研”一体化的' +
                '创新发展模式引领基因组学的发展，通过遍布全球的分支机构与产业链各方建立广泛的合作，' +
                '将前沿的多组学科研成果应用于医学健康、农业育种、资源保存等领域。华大基因组建的我国' +
                '第一个国家级综合基因库——国家基因库，于2016年6月18日进行试运营，将更有效地保护、' +
                '开发和利用中国宝贵的遗传资源，维护国家生物信息安全，提升中国在生物技术领域的战略制高点。',
            'site':'http://www.genomics.cn',
            'employ':'http://hr.genomics.cn',
            'ma':'top500_files/img/huada-ma.png',
        }
    );
    data.push(
        {
            'logo':'top500_files/img/aofei-logo.png',
            'name':'奥飞娱乐',
            'detail':
                '奥飞娱乐股份有限公司（前身为奥飞动漫）创立于1993年，' +
                '是目前中国最大的娱乐文化产业集团之一。2009年9月10日，' +
                '奥飞娱乐在深圳证券交易所公开上市（股票代码：002292），为中国动漫第一股。' +
                '奥飞娱乐通过文学、漫画、动画、电影、舞台剧、消费品、游戏、主题乐园、文化教育等多' +
                '元化的互动业务模式，整合不同产业资源，满足消费者对于文化娱乐体验的需求。',
            'site':'http://www.gdalpha.com',
            'employ':'http://www.hotjob.cn/wt/alpha/web/index',
            'ma':'top500_files/img/aofei-ma.jpg',
        }
    );
    return data;
}
//综合
function getZonghe(){
    var data = [];
    data.push(
        {
            'logo':'top500_files/img/zhongguo-logo.png',
            'name':'平安集团',
            'detail':
                '中国平安保险（集团）股份有限公司于1988年诞生于深圳蛇口，全球百强企业，' +
                '至今已发展成为融保险、银行、投资三大主营业务为一体、核心金融与互联网金融业务并行' +
                '发展的个人金融生活服务集团。中国平安也是国内金融牌照最齐全、业务范围最广泛、' +
                '控股关系最紧密的个人金融生活服务集团。',
            'site':'http://pingan.cn/index.shtml',
            'employ':'http://job.pingan.com',
            'ma':'top500_files/img/zhongguo-ma.png',
        }
    );
    data.push(
        {
            'logo':'top500_files/img/tcl-logo.png',
            'name':'TCL',
            'detail':
                'TCL集团股份有限公司是全球化的智能产品制造及互联网应用服务企业集团，' +
                '整体在深交所上市，旗下另有四家上市公司。全球7.5万名员工，23个研发机构，' +
                '业务遍及160多个国家和地区。2015年TCL营收1045亿元，品牌价值710亿元人民币，' +
                '稳居中国百强品牌第7位。',
            'site':'http://www.tcl.com/',
            'employ':'http://campus.tcl.com',
            'ma':'top500_files/img/tcl-ma.jpg',
        }
    );
    data.push(
        {
            'logo':'top500_files/img/suning-logo.png',
            'name':'苏宁云商控股',
            'detail':
                '1990年，苏宁开始创业之路，网络覆盖中国大陆、香港、澳门和日本市场，' +
                '在境内外拥有两家上市公司，在北京、上海、南京、美国硅谷设立4个研发中心，' +
                '年销售规模2800多亿元，形成商业、地产、金融、文创、体育、投资六大产业协同发展的格局。' +
                '是中国最大的零售企业，位列中国民营企业前三强。展望未来，围绕“科技苏宁、智慧服务”' +
                '战略，苏宁将以创新为驱动，打造科技、国际、多元的新苏宁。',
            'site':'http://www.suning.com',
            'employ':'http://www.careers.suning.cn',
            'ma':'top500_files/img/suning-ma.jpg',
        }
    );
    data.push(
        {
            'logo':'top500_files/img/yuanyang-logo.png',
            'name':'远洋集团',
            'detail':
                '远洋集团是内地在港上市房地产公司十强之一。创立于1993年，并于2007年9月28日在香港' +
                '联合交易所主板上市（股票代号03377）。2008年3月，远洋集团被纳入香港恒生综合指数及' +
                '恒生香港中资企业指数成分股。远洋集团是内地在港上市房地产公司十强之一。' +
                '创立于1993年，并于2007年9月28日在香港联合交易所主板上市（股票代号03377）。' +
                '2008年3月，远洋集团被纳入香港恒生综合指数及恒生香港中资企业指数成分股。',
            'site':'http://www.sinooceanland.com/ ',
            'employ':'http://sinooceanland.zhiye.com/',
            'ma':'top500_files/img/yuanyang-ma.png',
        }
    );
    data.push(
        {
            'logo':'top500_files/img/haihang-logo.png',
            'name':'海航基础',
            'detail':
                '海航基础作为世界500强海航集团旗下企业，秉承海航创业精神，以“创造美好生活、' +
                '造福于人类的幸福”为愿景，结合“一带一路”国家战略，以PPP项目为发展方向，大力拓' +
                '展双港一路、GTC交通枢纽综合开发等项目，打造全球领先的基础产业投资运营管理商与海' +
                '上丝绸之路建设投资商。截至2015年底，海航基础总资产逾1700亿元，年收入逾200亿元，' +
                '拥有3家上市公司（海航基础600515，航基股份HK00357，一卡通834858），下辖机场13家，' +
                '机场年旅客吞吐量近3500万人次。',
            'site':'http://www.hnainfrastructure.com/',
            'employ':'',
            'ma':'top500_files/img/haihang-ma.jpg',
        }
    );
    data.push(
        {
            'logo':'top500_files/img/xinao-logo.png',
            'name':'新奥集团',
            'detail':
                '新奥集团创建于1989年，始终践行“创新清洁能源 改善生存环境 提高生活品质”的企业使命。' +
                '新奥集团逐步发展成为以清洁能源为主业，拥有生态、生活两大业务板块，及能源、化工、' +
                '环保、工程技术和文化、健康、旅游、地产等众多关联产业的创新型企业集团。目前，' +
                '集团拥有员工3.7万余人，总资产超过1069亿元人民币，旗下有新奥能源（02688.HK）、' +
                '新奥股份（600803.SH）、北部湾旅游（603869.SH）三家上市公司，300余家全资、' +
                '控股公司遍布全球。',
            'site':'http://www.enn.cn',
            'employ':'http://www.hotjob.cn/wt/ENN/web/index',
            'ma':'top500_files/img/xinao-ma.jpg',
        }
    );
    return data;
}
//填充数据
function adaptData(data){
    for(var i=0;i<data.length;i++){
        $(".content-item").eq(i).find(".logo").attr("src",data[i].logo)
        $(".content-item").eq(i).find(".com-title").text(data[i].name);
        $(".content-item").eq(i).find(".com-intro").text(data[i].detail)
        $(".content-item").eq(i).find(".com-site").children("a").text(data[i].site).attr("href",data[i].site);
        $(".content-item").eq(i).find(".com-employ").empty().append('招聘网址：<a target="_blank" href="'+data[i].employ+'">'+data[i].employ+'</a>');
        $(".content-item").eq(i).find(".com-ma").attr("src",data[i].ma);
        $(".content-item").eq(i).find(".com-info").children("p").text("扫一扫进入招聘公众号");
        if(data[i].name == '沪江'){
            $(".content-item").eq(i).find(".com-employ").empty().append('沪江极客show报名：<a target="_blank" href="'+data[i].employ+'">'+data[i].employ+'</a>');
        }
        if(data[i].name == '海航基础' || data[i].name == '太极股份' || data[i].name == '华大基因' || data[i].name == '东芝医疗'){
            $(".content-item").eq(i).find(".com-info").children("p").text("扫一扫进入企业公众号");
        }
    }
    $(".mobile-content").find("h3").text(data[0].name);
    $(".mobile-content").find("img").attr("src",data[0].logo);
    $(".mobile-content").find("p").text(data[0].detail);
    $(".mobile-content").find(".com-site").children("a").text(data[0].site).attr("href",data[0].site);
    $(".mobile-content").find(".com-employ").children("a").text(data[0].employ).attr("href",data[0].employ);
    if(data[0].name == '沪江'){
        $(".mobile-content").find(".com-employ").empty().append('沪江极客show报名：<a target="_blank" href="'+data[0].employ+'">'+data[0].employ+'</a>');
    }
}