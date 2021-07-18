"use strict"
class plant {
	constructor(name,kin,summa,m2max,kmax,photo){
		this.name=name
		this.kin=kin
		this.t={ 
			summa,sum:0,wshod:15	
		}
		this.lande=5		
		this.kolwo=1		
		this.posew="апрель, 12"		
		this.wshod="июль, 12"		
		this.day=0		
		this.plod=0		
		this.podkorm={
        m2:0, k:0, m2max, kmax
    }
    this.photo=photo
    this.photo_set=["img/Photo0164","img/Photo0165",photo]
  // wrapper
	// methods	
		this.print=println
		this.add_sum=add_sum
    this.add_plod=add_plod
    this.add_m2=add_m2
    this.add_k=add_k
    this.stat_plod_meter=stat_plod_meter
    this.stat_plod_plant=stat_plod_plant

    this.add_li=add_li
    this.foto=foto
	}
}
function add_li() {
	document.writeln("<li><details><summary class='daun'>"+this.name+"</summary>")
  document.writeln("<p><img id='li_foto' align='right'  width='50%' \
    src='"+ this.photo+"' >")
  document.writeln("семейство: "+ this.kin)
	document.writeln("<br/>длина гряды, м: "+ this.lande)
	document.writeln("<br/>количество растений, шт: "+ this.kolwo)
	document.writeln("<br/>посев: "+ this.posew)
	document.writeln("<br/>всходы: "+ this.wshod)
	document.writeln("<br/>возраст, дней: "+ this.day)
	document.writeln("<br/>сумма температур: "+ this.t.summa)
	document.writeln("<br/>\t текущая: "+  this.t.sum)
	document.writeln("<br/>\t остаток: "+ (this.t.summa-this.t.sum))
	document.writeln("<br/>плоды, кг: "+ this.plod)
	document.writeln("<br/>подкормки М2 (осталось), шт: "+ this.podkorm.m2+"("+(this.podkorm.m2max-this.podkorm.m2)+")")
	document.writeln("<br/>подкормки K (осталось), шт: "+ this.podkorm.k,"("+(this.podkorm.kmax-this.podkorm.k)+")")
	document.writeln("<br/>урожайность кг на метр: "+ this.stat_plod_meter())
	document.writeln("<br/>урожайность кг на растение: "+ this.stat_plod_plant())
//  document.writeln(document.getElementById("menu"))
	document.writeln("</p></details></li>")
}
function println() {
	console.log(this.name,"семейство:", this.kin)
	console.log("\tдлина гряды, м:", this.lande)
	console.log("\tколичество растений, шт:", this.kolwo)
	console.log("\tпосев:", this.posew)
	console.log("\tвсходы:", this.wshod)
	console.log("\tвозраст, дней:", this.day)
	console.log("\tсумма температур:", this.t.summa)
	console.log("\t\t текущая:",  this.t.sum)
	console.log("\t\t остаток:", this.t.summa-this.t.sum)
	console.log("\tплоды, кг:", this.plod)
	console.log("\tподкормки М2 (осталось), шт:", this.podkorm.m2,"(",this.podkorm.m2max-this.podkorm.m2,")")
	console.log("\tподкормки K (осталось), шт:", this.podkorm.k,"(",this.podkorm.kmax-this.podkorm.k,")")
	console.log("\tурожайность кг на метр:", this.stat_plod_meter())
	console.log("\tурожайность кг на растение:", this.stat_plod_plant())
}
function add_sum(t,n) {
//	console.log(t,n,this.t.sum)
	this.t.sum+=(t-5)*n
	this.day+=n
}
function add_plod(p) {
//	console.log("добавлен урожай, кг:",p)
	this.plod+=p
}
function add_m2(m) {
//	console.log("добавлена подкормка M2")
	this.podkorm.m2+=m
}
function add_k(n) {
//	console.log("добавлена подкормка K")
	this.podkorm.k+=n
}
function stat_plod_plant(){
  return this.plod/this.kolwo
}
function stat_plod_meter(){
  return this.plod/this.lande
}
function foto() {
  let a=document.getElementById("foto")
  a.setAttribute("src",this.photo)
  console.log(a)
}
 
function body() {
    const start='<body>\
        <div id="wrapper" class="wrapper">\
          <div class="header">\
            HEADER\
      </div>\
          <div class="panel">\
            PANEL\
    <img src="img/perec.jpg" id="foto" width=90%>\
      </div>\
          <div id="content" class="content scrolled">\
            CONTENT<br><ul>'
    document.write(start)
}
function end_body() {
    const end_body='</ul></div>\
          <div class="menu">\
            MENU\
        <menu id="menu" type="list" title="выбор">\
            </menu>\
          </div>\
          <div class="footer">\
            FOOTER\
      </div>\
        </div>\
    </body>'
    document.write(end_body)
}

body()

// new klass
//
class pipo extends plant {
    constructor(name) {
        super(name,"тыквенные",1400,8,8,"img/Photo0166.jpg")
    }
}
class mare  extends plant {
    constructor(name) {
        super(name,"маревые",1500,3,8,"img/Photo0168.jpg")
    }
}
class selder  extends plant {
    constructor(name) {
        super(name,"сельдерейные",1500,4,8,"img/Photo0158.jpg")
    }
}
class kapust  extends plant {
    constructor(name) {
        super(name,"капустные",1700,4,8,"none")
    }
}
class repa  extends plant {
    constructor(name) {
        super(name,"капустные",700,4,8,"none")
    }
}
class luk  extends plant {
    constructor(name) {
        super(name,"луковые",1500,6,8,"none")
    }
}
class astra  extends plant {
    constructor(name) {
        super(name,"астровые",2150,6,6,"img/Photo0182.jpg")
    }
}


let o5=new pipo("огурцы 5шт")
o5.kolwo=5
o5.lande=1
o5.add_sum(30,30)
o5.add_sum(25,51)
o5.add_sum(20,3)
o5.add_sum(25,3)
//add_sum.call(a,25,3)
o5.add_plod(0.7)
o5.add_m2(3)
o5.add_k(2)
o5.photo="img/Photo0164.jpg"
o5.print()
o5.add_li()

let o2=new pipo("огурцы 2шт")
o2.posew="май, 23"
o2.wshod="июнь, 23"
o2.kolwo=2
o2.lande=0.15
o2.add_sum(25,18)
o2.add_sum(20,3)
o2.add_sum(25,3)
o2.add_m2(1)
o2.add_plod(0)
//o2.add_m2(1)
o2.photo="img/Photo0160.jpg"
o2.print()
o2.add_li()

let o1=new pipo("огурец любимчик 1шт")
o1.posew="июнь, 12"
o1.wshod="июль, 11"
o1.kolwo=1
o1.lande=0.15
o1.add_sum(18,1)
o1.add_sum(20,3)
o1.add_sum(25,3)
o1.add_plod(0)
o1.photo="img/Photo0183.jpg"
//o1.add_m2(1)
//o1.add_k(1)
o1.print()
o1.add_li()

let c=new pipo("цукини свои")
c.kolwo=7
c.lande=3.5
c.add_sum(25,45)
c.add_sum(20,3)
c.add_sum(25,3)
c.wshod="май, 25"
c.posew="май, 14"
c.add_m2(4)
c.add_k(2)
c.add_plod(3.7)
c.add_plod(1.8)
c.add_plod(1.4)
c.print()
c.add_li()

let ck=new pipo("цукини круглые")
ck.kolwo=4
ck.lande=1
ck.add_sum(25,45)
ck.add_sum(20,3)
ck.add_sum(25,3)
ck.wshod="май, 25"
ck.posew="май, 14"
ck.add_m2(4)
ck.add_k(2)
ck.add_plod(1.2)
ck.print()
ck.add_li()

let k=new pipo("кабачки свои")
k.kolwo=2
k.lande=0.5
k.add_sum(25,45)
k.add_sum(20,3)
k.add_sum(25,3)
k.wshod="май, 25"
k.posew="май, 14"
k.add_m2(4)
k.add_k(2)
k.add_plod(0.7)
k.add_plod(1.7)
k.print()
k.add_li()

let u=new selder("укроп грибовский")
u.photo="img/Photo0158.jpg"
u.kolwo=200
u.lande=4
u.add_sum(25,37)
u.add_sum(20,3)
u.add_sum(25,3)
u.wshod="июнь, 4"
u.posew="май, 23"
u.add_m2(3)
u.add_k(1)
u.add_plod(0.92)
u.print()
u.add_li()

let sw=new mare("свекла")
sw.kolwo=40
sw.lande=2.5
sw.add_sum(25,49)
sw.add_sum(20,3)
sw.add_sum(25,3)
sw.wshod="май, 18"
sw.posew="май, 9"
sw.add_m2(2)
sw.add_k(2)
sw.add_plod(0.27)
sw.print()
sw.add_li()

let sp=new mare("шпинат")
sp.kolwo=30
sp.lande=2.5
sp.add_sum(25,44)
sp.add_sum(20,3)
sp.add_sum(25,3)
sp.wshod="май, 23"
sp.posew="май, 9"
sp.add_m2(2)
sp.add_k(2)
sp.add_plod(2.30)
sp.print()
sp.add_li()

let m=new selder("моковь нантская")
m.kolwo=200
m.lande=5
m.add_sum(25,53)
m.add_sum(20,3)
m.add_sum(25,3)
m.wshod="май, 14"
m.posew="май, 6"
m.add_m2(3)
m.add_k(2)
m.add_plod(0.200)
m.print()
m.add_li()

let p=new astra("подсолнечник")
p.wshod="июнь, 6"
p.kolwo=1
p.lande=0.1
p.posew="май, 23"
p.wshod="июнь, 6"
p.add_sum(25,35)
p.add_sum(20,3)
p.add_sum(25,3)
p.add_m2(3)
p.add_k(0)
p.add_plod(0)
p.print()
p.add_li()

end_body()
