/*
 * Author:Simba
 * Date:2017-11-29
 * 
 * Sample:
 * 	window.tableHelper({
				rows: 5,
				cols: 6,
				callback: function() {
					alert("OK")
				}
			});
 * 
 * Desc:
 * 	table的类名为：s_table
 *  td的类名为：s_table_td
 * 	偶数行tr的类名为：s_table_tr_odd
 * 
 * */

(function(gg) {
	gg.tableHelper = function(option) {
		var r = option.rows || 10;
		var c = option.cols || 10;

		function create(t) {
			return document.createElement(t);
		}

		var table = create("table");
		table.className = "s_table"
		for(let i = 1; i <= r; i++) {
			var tr = create("tr");
			if(i % 2 == 0) {
				tr.className = "s_table_tr_odd"
			}

			for(let j = 1; j <= c; j++) {
				var td = create("td");
				td.className = "s_table_td";
				td.innerText = i + "," + j;
				tr.appendChild(td.cloneNode(true));
			}
			table.appendChild(tr);
		}
		document.body.appendChild(table);

		if(option.callback) {
			option.callback();
		}

	}
})(window)