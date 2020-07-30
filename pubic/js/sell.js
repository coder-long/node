var carbox = document.querySelector(".deal-list-wrapper");
var more=document.querySelector(".deal-more")





class car {
    constructor() {
        this.carli = document.createElement("li")
        this.carimg=document.createElement("img")
        this.carli.appendChild(this.carimg)
        this.carimg.src="https://image1.guazistatic.com/qn2007231005336d0600c577e8fdf07021753837bbc9e9.jpg?imageView2/1/w/280/h/180/q/88"


        this.car1p=document.createElement('p')
        this.car1p.classList.add("deal-p1")
        this.carli.appendChild(this.car1p)   //创建第一个并且添加        
        
        this.car2p=document.createElement('p')
        this.car2p.classList.add("deal-p2")
        this.carli.appendChild(this.car2p) //创建第二个并添加       
        
        this.car3p=document.createElement('p')
        this.car3p.classList.add("deal-p3")
        this.carli.appendChild(this.car3p)  //创建第三个并添加
        this.carem=document.createElement("em")
        this.car3p.appendChild(this.carem)
        carbox.appendChild(this.carli)
    }
    
}


more.onclick=function () {
    for(var i=0;i<4;i++){
        new car()
    }
}
