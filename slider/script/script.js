var models = [
    {
        name: 'Papatya',
        image: 'img/1.jpg',
        link: 'http://www.instagram.com/teknobol'
    },
    {
        name: 'Çocuk için çiçek',
        image: 'img/2.jpg',
        link: 'http://www.instagram.com/teknobol'
    },
    {
        name: 'Campanula',
        image: 'img/3.jpg',
        link: 'http://www.instagram.com/teknobol'
    },
    {
        name: 'Keçeden Yapay Çiçek',
        image: 'img/4.jpg',
        link: 'http://www.instagram.com/teknobol'
    },
    {
        name: 'Sümbül',
        image: 'img/5.jpg',
        link: 'http://www.instagram.com/teknobol'
    },
    {
        name: 'Mevsim Çiçeği',
        image: 'img/6.jpg',
        link: 'http://www.instagram.com/teknobol'
    }
]
var index=0;
var slaytCount = models.length;
var interval;
var settings={
    duration: '2000',
    random: false
}
init(settings);
showSlide(index);

document.querySelector('.fa-backward').addEventListener('click', function(){
    index--;
    
    
    showSlide(index);
});

document.querySelector('.fa-forward').addEventListener('click', function(){
    index++;
    
    
    showSlide(index);
});

document.querySelectorAll('.fas').forEach(function(item){
    item.addEventListener('mouseenter', function(){
        clearInterval(interval);
    })
});

document.querySelectorAll('.fas').forEach(function(item){
    item.addEventListener('mouseleave', function(){
        init(settings);
    })
});

function init(ayarlar){
    //setTimeout: belirtilen süre sonra başlar ve durur.
    //setInterval: clearInterval ile durdurulmadığı sürece sürekli tekrar eder.
    var prev;
    interval=setInterval(function(){
        if(ayarlar.random===true){
            do{
                index=Math.floor(Math.random()*slaytCount);
            }while(index==prev)
            prev=index;
            
        }
        else{
            if(slaytCount==index+1){
                index=-1;
            }
            showSlide(index);
            index++;
            
        }
        showSlide(index)
    }, ayarlar.duration);
}

function showSlide(i){
    index=i;
    if(i<0){
        index=slaytCount-1;
    }
    if(i>=slaytCount){
        index=0;
    }
    console.log(index);
    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-img-top').setAttribute('src', models[index].image);
    document.querySelector('.card-link').setAttribute('href', models[index].link);
}
