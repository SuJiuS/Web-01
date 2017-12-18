(function ($) {

    $.extend({classes: {}})

    $.extend($.classes, {

        init: function () {
            $(document) .on("click", '[name="delete"]', function () {
                var obj =$(this);
                obj.parent().remove();
             })

            $.classes.getList()
        },

        getList: function () {
            $.ajax({
                type: "post",
                url: "/class/list",
                dataType: 'json',
                success: function (d) {

                    $('.list_table tbody').html('');

                    for (var i = 0; i < d.length; i++) {
                        var str = `
                         <tr>
                            <td>${d[i].id}</td>
                            <td>${d[i].name}</td>
                            <td>${d[i].gradeid}</td>
                            <td style='color:blue' name="delete">删除</td>
                        </tr>
                        `;

                        $('.list_table tbody').append(str)
                    }
                }
            });
        }
    })
})(jQuery)