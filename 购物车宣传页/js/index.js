/*Gonefour_boke*/
$(function(){
    $('.container').fullpage({
        //设置页面颜色
        sectionsColor: ['#fadd67','#84a2d4','#ef674d','#ffeedd','#d04759','#84d9ed','#8ac060'],
        //设置内容不居中
        verticalCentered: false,
        //设置滚动速度
        scrollingSpeed: 1000,
        //设置当前页面指示器
        navigation: true,
        //滚动离开前回调
        onLeave: function (index,nextIndex,direction){
            if (index === 2 && nextIndex === 3) {
                $('.section').eq(index - 1).addClass('leaved');
            }else if (index === 3 && nextIndex === 4) {
                 $('.section').eq(index - 1).addClass('leaved');
            }
        },
        //滚动后回调
        afterLoad: function (link,index) {
            $('.section').eq(index - 1).addClass('now');
        },
        //页面生成后回调
        afterRender: function (){
            $('.more').on('click',function (){
                $.fn.fullpage.moveSectionDown();
            });
        }
        
    });
});