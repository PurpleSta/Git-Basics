const getYear=new Date().getFullYear();
document.getElementById("getYear").innerHTML=getYear;

//setup
const setup=document.getElementById("setupshow")
setup.addEventListener("click",function(){
    document.getElementById("setup").style.display="block";
    document.getElementById("repo").style.display="none";
    document.getElementById("basic").style.display="none";
    document.getElementById("commit").style.display="none";
    document.getElementById("git").style.display="none";
    document.getElementById("merge").style.display="none";
    document.getElementById("pull").style.display="none";
    document.getElementById("stash").style.display="none";
    document.getElementById("undoing").style.display="none";
    document.getElementById("logs").style.display="none";
    document.getElementById("remote").style.display="none";
    document.getElementById("tagging").style.display="none";
    document.getElementById("useful").style.display="none";
    document.getElementById("submodules").style.display="none";
});

const repo=document.getElementById("reposhow");
repo.addEventListener("click",function(){
    document.getElementById("setup").style.display="none";
    document.getElementById("repo").style.display="block";
    document.getElementById("basic").style.display="none";
    document.getElementById("commit").style.display="none";
    document.getElementById("git").style.display="none";
    document.getElementById("merge").style.display="none";
    document.getElementById("pull").style.display="none";
    document.getElementById("stash").style.display="none";
    document.getElementById("undoing").style.display="none";
    document.getElementById("logs").style.display="none";
    document.getElementById("remote").style.display="none";
    document.getElementById("tagging").style.display="none";
    document.getElementById("useful").style.display="none";
    document.getElementById("submodules").style.display="none";
});

const basic=document.getElementById("basicshow");
basic.addEventListener("click",function(){
    document.getElementById("setup").style.display="none";
    document.getElementById("repo").style.display="none";
    document.getElementById("basic").style.display="block";
    document.getElementById("commit").style.display="none";
    document.getElementById("git").style.display="none";
    document.getElementById("merge").style.display="none";
    document.getElementById("pull").style.display="none";
    document.getElementById("stash").style.display="none";
    document.getElementById("undoing").style.display="none";
    document.getElementById("logs").style.display="none";
    document.getElementById("remote").style.display="none";
    document.getElementById("tagging").style.display="none";
    document.getElementById("useful").style.display="none";
    document.getElementById("submodules").style.display="none";
});

const commit=document.getElementById("commitshow");
commit.addEventListener("click",function(){
    document.getElementById("setup").style.display="none";
    document.getElementById("repo").style.display="none";
    document.getElementById("basic").style.display="none";
    document.getElementById("commit").style.display="block";
    document.getElementById("git").style.display="none";
    document.getElementById("merge").style.display="none";
    document.getElementById("pull").style.display="none";
    document.getElementById("stash").style.display="none";
    document.getElementById("undoing").style.display="none";
    document.getElementById("logs").style.display="none";
    document.getElementById("remote").style.display="none";
    document.getElementById("tagging").style.display="none";
    document.getElementById("useful").style.display="none";
    document.getElementById("submodules").style.display="none";
});

const git=document.getElementById("gitshow");
git.addEventListener("click",function(){
    document.getElementById("setup").style.display="none";
    document.getElementById("repo").style.display="none";
    document.getElementById("basic").style.display="none";
    document.getElementById("commit").style.display="none";
    document.getElementById("git").style.display="block";
    document.getElementById("merge").style.display="none";
    document.getElementById("pull").style.display="none";
    document.getElementById("stash").style.display="none";
    document.getElementById("undoing").style.display="none";
    document.getElementById("logs").style.display="none";
    document.getElementById("remote").style.display="none";
    document.getElementById("tagging").style.display="none";
    document.getElementById("useful").style.display="none";
    document.getElementById("submodules").style.display="none";
});

const merge=document.getElementById("mergeshow");
merge.addEventListener("click",function(){
    document.getElementById("setup").style.display="none";
    document.getElementById("repo").style.display="none";
    document.getElementById("basic").style.display="none";
    document.getElementById("commit").style.display="none";
    document.getElementById("git").style.display="none";
    document.getElementById("merge").style.display="block";
    document.getElementById("pull").style.display="none";
    document.getElementById("stash").style.display="none";
    document.getElementById("undoing").style.display="none";
    document.getElementById("logs").style.display="none";
    document.getElementById("remote").style.display="none";
    document.getElementById("tagging").style.display="none";
    document.getElementById("useful").style.display="none";
    document.getElementById("submodules").style.display="none";
});

const pull=document.getElementById("pullshow");
pull.addEventListener("click",function(){
    document.getElementById("setup").style.display="none";
    document.getElementById("repo").style.display="none";
    document.getElementById("basic").style.display="none";
    document.getElementById("commit").style.display="none";
    document.getElementById("git").style.display="none";
    document.getElementById("merge").style.display="none";
    document.getElementById("pull").style.display="block";
    document.getElementById("stash").style.display="none";
    document.getElementById("undoing").style.display="none";
    document.getElementById("logs").style.display="none";
    document.getElementById("remote").style.display="none";
    document.getElementById("tagging").style.display="none";
    document.getElementById("useful").style.display="none";
    document.getElementById("submodules").style.display="none";
});

const stash=document.getElementById("stashshow");
stash.addEventListener("click",function(){
    document.getElementById("setup").style.display="none";
    document.getElementById("repo").style.display="none";
    document.getElementById("basic").style.display="none";
    document.getElementById("commit").style.display="none";
    document.getElementById("git").style.display="none";
    document.getElementById("merge").style.display="none";
    document.getElementById("pull").style.display="none";
    document.getElementById("stash").style.display="block";
    document.getElementById("undoing").style.display="none";
    document.getElementById("logs").style.display="none";
    document.getElementById("remote").style.display="none";
    document.getElementById("tagging").style.display="none";
    document.getElementById("useful").style.display="none";
    document.getElementById("submodules").style.display="none";
});

const undoing=document.getElementById("undoingshow");
undoing.addEventListener("click",function(){
    document.getElementById("setup").style.display="none";
    document.getElementById("repo").style.display="none";
    document.getElementById("basic").style.display="none";
    document.getElementById("commit").style.display="none";
    document.getElementById("git").style.display="none";
    document.getElementById("merge").style.display="none";
    document.getElementById("pull").style.display="none";
    document.getElementById("stash").style.display="none";
    document.getElementById("undoing").style.display="block";
    document.getElementById("logs").style.display="none";
    document.getElementById("remote").style.display="none";
    document.getElementById("tagging").style.display="none";
    document.getElementById("useful").style.display="none";
    document.getElementById("submodules").style.display="none";
});

const logs=document.getElementById("logshow");
logs.addEventListener("click",function(){
    document.getElementById("setup").style.display="none";
    document.getElementById("repo").style.display="none";
    document.getElementById("basic").style.display="none";
    document.getElementById("commit").style.display="none";
    document.getElementById("git").style.display="none";
    document.getElementById("merge").style.display="none";
    document.getElementById("pull").style.display="none";
    document.getElementById("stash").style.display="none";
    document.getElementById("undoing").style.display="none";
    document.getElementById("logs").style.display="block";
    document.getElementById("remote").style.display="none";
    document.getElementById("tagging").style.display="none";
    document.getElementById("useful").style.display="none";
    document.getElementById("submodules").style.display="none";
});

const remote=document.getElementById("remoteshow");
remote.addEventListener("click",function(){
    document.getElementById("setup").style.display="none";
    document.getElementById("repo").style.display="none";
    document.getElementById("basic").style.display="none";
    document.getElementById("commit").style.display="none";
    document.getElementById("git").style.display="none";
    document.getElementById("merge").style.display="none";
    document.getElementById("pull").style.display="none";
    document.getElementById("stash").style.display="none";
    document.getElementById("undoing").style.display="none";
    document.getElementById("logs").style.display="none";
    document.getElementById("remote").style.display="block";
    document.getElementById("tagging").style.display="none";
    document.getElementById("useful").style.display="none";
    document.getElementById("submodules").style.display="none";
});

const tag=document.getElementById("taggingshow");
tag.addEventListener("click",function(){
    document.getElementById("setup").style.display="none";
    document.getElementById("repo").style.display="none";
    document.getElementById("basic").style.display="none";
    document.getElementById("commit").style.display="none";
    document.getElementById("git").style.display="none";
    document.getElementById("merge").style.display="none";
    document.getElementById("pull").style.display="none";
    document.getElementById("stash").style.display="none";
    document.getElementById("undoing").style.display="none";
    document.getElementById("logs").style.display="none";
    document.getElementById("remote").style.display="none";
    document.getElementById("tagging").style.display="block";
    document.getElementById("useful").style.display="none";
    document.getElementById("submodules").style.display="none";
});

const useful=document.getElementById("usefulshow");
useful.addEventListener("click",function(){
    document.getElementById("setup").style.display="none";
    document.getElementById("repo").style.display="none";
    document.getElementById("basic").style.display="none";
    document.getElementById("commit").style.display="none";
    document.getElementById("git").style.display="none";
    document.getElementById("merge").style.display="none";
    document.getElementById("pull").style.display="none";
    document.getElementById("stash").style.display="none";
    document.getElementById("undoing").style.display="none";
    document.getElementById("logs").style.display="none";
    document.getElementById("remote").style.display="none";
    document.getElementById("tagging").style.display="none";
    document.getElementById("useful").style.display="block";
    document.getElementById("submodules").style.display="none";
});

const submodules=document.getElementById("submoduleshow");
submodules.addEventListener("click",function(){
    document.getElementById("setup").style.display="none";
    document.getElementById("repo").style.display="none";
    document.getElementById("basic").style.display="none";
    document.getElementById("commit").style.display="none";
    document.getElementById("git").style.display="none";
    document.getElementById("merge").style.display="none";
    document.getElementById("pull").style.display="none";
    document.getElementById("stash").style.display="none";
    document.getElementById("undoing").style.display="none";
    document.getElementById("logs").style.display="none";
    document.getElementById("remote").style.display="none";
    document.getElementById("tagging").style.display="none";
    document.getElementById("useful").style.display="none";
    document.getElementById("submodules").style.display="block";
});

const getWidth=window.innerWidth;
    if (getWidth<=425){
        const getMain=document.getElementsById("main-responsive");
        getMain.style.display="block";
        getMain.style.display="100%"
    }
