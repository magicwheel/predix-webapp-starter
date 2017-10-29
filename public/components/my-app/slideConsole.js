const slideConsole = function(e){

    //
    // CTRL - zoom
    //

    if(e.ctrlKey){

        e.preventDefault();
        let currentZoom = Number($('.sagaConsoleInner').css('zoom'));

        let delta = e.deltaY > 0 ? -.01 : .01;

        let newZoom = currentZoom + delta;


        newZoom > 2 ? newZoom = 2 : (newZoom < .1 ? newZoom  = .1 : null);

        $('.sagaConsoleInner').css('zoom', newZoom);

        return;
    }

    //
    // SHIFT - zoom
    //

    if(e.shiftKey){
        e.preventDefault();
        let currentZoom = Number($('.sagaConsoleInner').css('zoom'));

        let delta = e.deltaX > 0 ? -.1 : .1;

        let newZoom = currentZoom + delta;

        newZoom > 2 ? newZoom = 2 : (newZoom < .1 ? newZoom  = .1 : null);

        $('.sagaConsoleInner').css('zoom', newZoom);

        return;
    }

    //
    //  ALT - slide
    //

    if(e.altKey){
        e.preventDefault();

        let newConsoleWidth = $('.sagaConsole').width()-e.deltaY;

        let bodyWidth = $('body').width();

        newConsoleWidth > bodyWidth-200 ? newConsoleWidth = bodyWidth-200 : null ;
        newConsoleWidth < (bodyWidth/3) ? newConsoleWidth = bodyWidth/3 : null;

        $('.sagaConsole').width(newConsoleWidth);


        let consoleWidth = $('.sagaConsole').width();

        const newUIWidth = bodyWidth - consoleWidth;

        $('#UI').width(newUIWidth);
    }
}