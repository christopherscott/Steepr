((function(){var a={}.hasOwnProperty,b=function(b,c){function e(){this.constructor=b}for(var d in c)a.call(c,d)&&(b[d]=c[d]);return e.prototype=c.prototype,b.prototype=new e,b.__super__=c.prototype,b};define(["jquery","use!backbone","Teas","TeaListView","Timer","../lib/swipe","jquery_mobile"],function(a,c,d,e,f){var g,h;return h=function(a,b){var c,d,e,f;e=["-webkit-","-moz-","-ms-",""],c=0,d=e.length,f=[];while(c<d)a.css(""+e[c]+"animation-duration",""+steeping_secs+"s"),f.push(c++);return f},g=function(c){function g(){return g.__super__.constructor.apply(this,arguments)}return b(g,c),g.name="Steepr",g.prototype.el=a("body"),g.prototype.events={"pageshow #steep":"steep"},g.prototype.initialize=function(){var a,b,c;return c=this,b=new d,a=new e({collection:b}),window.teas=b,window.teaListView=a,b.fetch({add:!0,success:function(c,d){return c.length||b.loadDefaults(),a.activateSwipe()},error:function(a,b){return console.log(arguments)}})},g.prototype.steep=function(b,c){var d,e,g,i,j,k,l,m,n;return i=a("#steep .content"),e=teas.getActive(),k=e.get("name"),n=e.get("times").length-1,m=e.get("times"),d=e.get("count"),j=m[d<n?d:n],e.incr_count(),h(i,j),i.addClass("brewing"),l=new f,g=l.set("total",j),console.log(g),l.start(),a("#steep .type").text(k),setTimeout(function(){return i.removeClass("brewing"),clearInterval(g)},j*1e3)},g}(c.View)})})).call(this)