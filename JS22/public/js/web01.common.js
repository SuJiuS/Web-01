(function ($) {

    $.extend({common: {}, index: {}, user: {}})

    $.extend($.user, {
        getList: function () {
            $
                .common
                .ajax({
                    type: "get",
                    url: "/user/list",
                    success: function (d) {
                        $('.list_table tbody').html('');

                        for (var i = 0; i < d.length; i++) {
                            var str = `
                 <tr>
                    <td>${d[i].id}</td>
                    <td>${d[i].username}</td>
                    <td>${d[i].nickname}</td>
                    <td style='color:blue' onclick='del(${d[i].id})'>删除</td>
                </tr>
                `;

                            $('.list_table tbody').append(str)
                        }
                    }
                });
        }
    })

    $.extend($.index, {
        init: function () {
            $('[action-name="classlist"]')
                .click(function () {
                    $
                        .common
                        .getHTML("/html/classlist.html", $('#maincontent'))
                })

            $('[action-name="userlist"]').click(function () {
                $
                    .common
                    .getHTML("/html/userlist.html", $('#maincontent'))
            })

            $('.left_navs_title').click(function () {

                $('.left_navs_curr').removeClass('left_navs_curr');

                $(this).toggleClass('left_navs_curr');

                //找到当前Li里面的二级菜单div
                var thisnavs = $(this)
                    .parent()
                    .find('.left_sub_navs');

                //将兄弟节点下面的二级菜单全部收起来
                $(this)
                    .parent()
                    .siblings()
                    .find('.left_sub_navs')
                    .slideUp("slow");

                // 把除了当前二级菜单之外的所有二级菜单都收起来 $('.left_sub_navs').not(thisnavs).slideUp("slow");
                // 当前的二级菜单收缩或展示
                $(this)
                    .parent()
                    .find('.left_sub_navs')
                    .slideToggle("slow");
            })
        }
    })

    $.extend($.common, {

        getHTML: function (url, container) {
            $.ajax({
                type: "get",
                url: url,
                dataType: 'html',
                success: function (d) {
                    container.html(d)
                }
            });
        },

        ajax: function (option) {
            $.ajax({
                url: option.url,
                data: option.data || null,
                type: option.type || 'POST',
                cache: option.cache || false,
                async: option.async || true,
                dataType: option.dataType || 'json',
                success: function (data) {
                    if (option.success) 
                        option.success(data)
                },
                beforeSend: function (xhr) {
                    if (option.beforeSend) 
                        option.beforeSend(xhr)
                },
                complete: function (data) {
                    if (option.complete) 
                        option.complete(data)
                }
            })
        }
    })

})(jQuery)