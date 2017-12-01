##JS第10课时
1. js中不存在方法的重载
2. 页面加载完成事件

		window.onload = function(){};
3. 匿名函数

		window.onload = (e) => {
			alert(e);
		}
4. 绑定事件（不会覆盖）

		window.addEventListener("load"，function(){},"false")
5. 控制台可以以数组形式输出值

		function abc(){
			console.log(arguments[0],arguments[1],arguments[2])
		};
		abc(1,2,3);
6. arguments.callee

		function abc(a){
			console.log(arguments.callee) //调用本身
			console.log(arguments.callee(a))//递归
		};
		abc(1);
7. 用递归 递减累加

		function abc(){
			if(a == 0){
				return a;
			}else{
				return a + abc(--a);
			}
		}
		console.log(abc(10));
		//减少耦合，可以用arguments.callee()来调用本身
		function abc(){
			if(a == 0){
				return a;
			}else{
				return a + arguments.callee(--a);
			}
		}
		var cde =abc;
		abc = null;
		console.log(cde(100));
		//将调用的本身打印出来
		function abc(){
			console.log(arguments.callee.caller);
			if(a == 0){
				return a;
			}else{
				return a + arguments.callee(--a);
			}
		}
		var cde =abc;
		abc = null;
		console.log(cde(100));
8. 间接函数

		function a(){
			console.log(this)
		}
		function b(){
			a.call(this);
			console.log(2)
		}
		b();

9. 对象封装 (构造函数)

		function Dog(name){
			//this表示当前对象
			this.name = name;
			this.sayHello = function(name){
				alter(this.name+"说,你好,"+name)
			}
		}

		var qc = new Dog("QC");
		qc.sayHello("CC");