const funContects = document.querySelectorAll('.content-fun');

const options = {
    root: null,
    threshold: .5,
};

const observer = new IntersectionObserver(function (enteries, observer) {
    enteries.forEach(entery => {
        if (!entery.isIntersecting) {
            return;
        }

        entery.target.classList.toggle('show-fun-content');
        observer.unobserve(entery.target);

    });
}, options);

funContects.forEach(funContent => {
    observer.observe(funContent);
})