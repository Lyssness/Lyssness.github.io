_init : function( options ) {
 
    // the categories (ul)
    this.$categories = this.$el.children( 'ul' );
    // the navigation
    this.$navcategories = this.$el.find( 'nav > a' );
    var animEndEventNames = {
        'WebkitAnimation' : 'webkitAnimationEnd',
        'OAnimation' : 'oAnimationEnd',
        'msAnimation' : 'MSAnimationEnd',
        'animation' : 'animationend'
    };
    // animation end event name
    this.animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];
    // animations and transforms support
    this.support = Modernizr.csstransforms && Modernizr.cssanimations;
    // if currently animating
    this.isAnimating = false;
    // current category
    this.current = 0;
    var $currcat = this.$categories.eq( 0 );
    if( !this.support ) {
        this.$categories.hide();
        $currcat.show();
    }
    else {
        $currcat.addClass( 'mi-current' );
    }
    // current nav category
    this.$navcategories.eq( 0 ).addClass( 'mi-selected' );
    // initialize the events
    this._initEvents();
 
}
