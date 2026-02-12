 //عند الضغض علي البكس في صفحة الريسية و صفحة المقالة 
$(".box").hover(
        function() { $(this).css({"transform": "scale(1.05)", "transition": "0.3s"}); },
        function() { $(this).css("transform", "scale(1)"); }
    );
//نصاح الصفحة الريسية   
//مصوفةبينات هي تحفير=ز زائد نصائح 
 // //

 const tipsData = [
    { text: "المرونة النفسية هي قدرتك على الوقوف مجدداً بعد كل عثرة.", category: "تحفيز" },
    { text: "أعطِ طفلك وقتاً للاستماع، هذا هو الدعم الحقيقي الذي يحتاجه.", category: "أطفال" },
    { text: "تذكر أن صحتك النفسية أولوية وليست رفاهية، ابدأ بنفسك.", category: "عام" },
    { text: "التنفس العميق يقلل من هرمونات التوتر فوراً، جربه الآن.", category: "تحفيز" }
];

// دالة  بدحدث المحتوى  
function updateTip() {

//نصائح عشوائية 
    const randomIndex = Math.floor(Math.random() * tipsData.length);
    const selected = tipsData[randomIndex];

    const textElement = document.getElementById('tip-text');
    const categoryElement = document.getElementById('tip-category');

  // استخدام الشروط   
    let categoryClass = "";
    if (selected.category === "تحفيز") {
        categoryClass = "cat-motivation";
    } else if (selected.category === "أطفال") {
        categoryClass = "cat-kids";
    } else {
        categoryClass = "cat-general";
    }

    //  البيانات في الصفحة
    textElement.innerText = selected.text;
    categoryElement.innerText = "تصنيف: " + selected.category;
    
    //     تحديث الكلاس)
    categoryElement.className = "badge rounded-pill p-2 px-3 " + categoryClass;
}

//  استخدام مكتبة jQuery  لعمل تأثيرات حركية
$(document).ready(function() {
    // تشغيل الدالة  عند تحميل الصفحة
    updateTip();

    // عند الضغط على الزر  
    $("#refresh-btn").click (function() {
        //"الاختفاء والظهور"  
        $("#tip-display").fadeOut(300, function() {
            updateTip(); //  وهي مخفية
            $(this).fadeIn(300); //  نظهرها مرة أخرى
        });
    });
});

/*////////////////////نصائح المقلات ///////////////////////////// /*/
$(document).ready(function() {

    // مصفوفة النصائح  
    const tips = [
        "تنفسي بعمق، كل شيء سيكون بخير.",
        "أنتِ قوية وقادرة على تجاوز الصعاب.",
        "خصصي وقتاً لنفسكِ كل يوم، أنتِ تستحقين.",
        "ابتسامتكِ تصنع فرقاً، ابدئي بها يومكِ."
    ];

    //عند الضغط   
    $("#btn-tip").click(function() {
 //بيختار نصيحة  بشكل عشوائية 
        let randomIndex = Math.floor(Math.random() * tips.length);
        
        // استخدام تأثيرات   
        $("#tip-text").hide().text(tips[randomIndex]).fadeIn(600);


    });

});
///////////////////////////form////////////////////////////////////////////


    //  . تأثيرات   على نموذج التواصل 
$("form").submit(function(event) {
 event.preventDefault(); // منع الصفحة من التحديث

        // جلب قيمة اسم المستخدم (إذا كتبه)
        let userName = $("input[name='name']").val() || "عزيزتي";  
                                                        //اذلم يكتب الاسم
        // إخفاء النموذج وإظهار رسالة نجاح بحركة Fade
        $(this).fadeOut(500, function() {
            $(this).after(`
                <div id="success-alert" class="alert alert-success text-center mt-3" style="display:none;">
                    <h4>شكراً لكِ يا ${userName}!</h4>
                    <p>تم استلام رسالتكِ بخصوصية تامة، وسيتواصل معكِ المختص قريباً.</p>
                </div>
            `);
            $("#success-alert").fadeIn(800);
        });
    });

     // عند تمرير الماوس للصورة تصبح أكثر وضوحاً
    $(".doctor").hover(
        function() { $(this).css({"transform": "scale(1.05)", "transition": "0.3s"}); },
        function() { $(this).css("transform", "scale(1)"); }
    );

;
////////////////////////// فيديو,////////////////////////////////

 $(document).ready(function() {
    $(".tab-content").hide();//اخفاءالجميع
     $(".tab-content:first-child").show(); //اضهرلي لاول/

     $('.tabs li').click(function(){//عند الضغط عل
    $('.tabs li').removeClass('activevideo');  //احذف الكلاس في الكل 
    $(this).addClass('activevideo');//اضف الكلاس 

    const now_tab=$(this).attr('data-attr');//اضف الفقرة تبعت
   $(".tab-content").hide();
   $('.' +now_tab).show();

    })
 });
 ////////////////////////////////////////////////////////////////////عن المنصة 
 $(document).ready(function() {
    // مصفوفة بيانات المنصة  
    const aboutInfo = [
        { title: "الأمان", text: "خصوصية تامة لكل مستخدمة.", icon: "🔒" },
        { title: "التخصص", text: "نخبة من الأخصائيين المعتمدين.", icon: "🎓" },
        { title: "الاستمرارية", text: "دعم متاح في كل الأوقات.", icon: "🕒" }
    ];

    let aboutHTML = "";
     
    for (let i = 0; i < aboutInfo.length; i++) {  //   Loop لعرض البيانات 
        aboutHTML += `
            <div class="col-md-4 mb-3">
                <div class="p-3 shadow-sm rounded bg-white border-top border-danger">
                    <h3>${aboutInfo[i].icon}</h3>
                    <h5 class="text-prim">${aboutInfo[i].title}</h5>
                    <p>${aboutInfo[i].text}</p>
                </div>
            </div>`;
    }
    $("#about-stats").html(aboutHTML);

});


