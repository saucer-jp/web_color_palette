$(function(){

	// browser is IE!
	if ( $( '#ieContainer' ).is( ':visible' ) ) return false;

	// ===========================================================
	// palettes data
	// ===========================================================
	var colorPalettes = {

		spectrum: {
			name: 'Spectrum',
			colors: [
				['#eee', '#f3dfe6', '#f7e1e3', '#f8e3e2', '#fae6df', '#fbebde', '#fcefdd', '#fbf3db', '#fbf6db', '#f7f5de', '#f0f4e0', '#e3f2e3', '#dbf0e7', '#dbeee9', '#dbedeb', '#dbebed', '#dbeaee', '#dbe8ef', '#dee6f2', '#dfe5f1', '#e5e4f0', '#e9e2ef', '#ebe1ef', '#ede1ec', '#f1e0e9'],
				['#ddd', '#e7c0cc', '#eec3c8', '#f2c7c4', '#f6cdc0', '#f7d6bd', '#f8e0bb', '#f8e8b8', '#f7ecb6', '#efeabc', '#e2e9c0', '#c7e5c6', '#b6e1d0', '#b6ddd4', '#b6dad7', '#b6d7db', '#b6d4de', '#b7d1df', '#bdcde5', '#c0cbe3', '#cbc9e1', '#d2c6e0', '#d7c3de', '#dbc2da', '#e4c2d3'],
				['#ccc', '#dba0b3', '#e6a5ac', '#ebaba7', '#f1b4a0', '#f3c29c', '#f5d099', '#f4dc94', '#f3e392', '#e7e09b', '#d3dea1', '#abd8aa', '#92d2b8', '#92ccbe', '#92c8c3', '#92c3c9', '#92bfcd', '#93bacf', '#9cb4d8', '#a0b1d5', '#b1aed2', '#bca9d0', '#c3a5ce', '#c9a4c7', '#d6a3bd'],
				['#bbb', '#d0809a', '#dd8691', '#e48f8a', '#ec9c81', '#f0ad7b', '#f1c077', '#f1d070', '#eeda6d', '#dfd679', '#c5d482', '#8fca8e', '#6dc2a1', '#6dbca9', '#6db5ae', '#6dafb8', '#6daabc', '#70a2c0', '#7c9cca', '#8098c8', '#9792c4', '#a58dc0', '#ae88bd', '#b685b4', '#c885a8'],
				['#aaa', '#c46081', '#d56875', '#dd736d', '#e78361', '#ec995a', '#eeb055', '#edc44c', '#ead149', '#d7cc58', '#b6c963', '#73bd72', '#49b389', '#49ab93', '#49a39a', '#499ba6', '#4995ab', '#4c8bb0', '#5b83bd', '#607eba', '#7d77b5', '#8f70b0', '#9a6aad', '#a467a1', '#ba6692'],
				['#999', '#b84167', '#cc4a5a', '#d7574f', '#e36a42', '#e88439', '#eaa133', '#eab929', '#e6c724', '#cfc136', '#a8be43', '#57b055', '#24a472', '#249a7e', '#249086', '#248794', '#247f9b', '#2874a0', '#3a6ab0', '#4164ac', '#635ca6', '#7854a1', '#864c9c', '#92488f', '#ad487c'],
				['#888', '#ac214e', '#c42c3e', '#d03b32', '#de5122', '#e47018', '#e79111', '#e6ad05', '#e2be00', '#c7b715', '#99b324', '#3ba339', '#00955a', '#008968', '#007e72', '#007382', '#006a8a', '#045d90', '#1951a3', '#214a9e', '#494197', '#623791', '#722e8c', '#802a7c', '#9f2966'],
				['#777', '#982046', '#ad2938', '#b7362e', '#c34920', '#c86318', '#cb8012', '#ca9807', '#c7a603', '#b0a015', '#889d22', '#388f34', '#058350', '#05795c', '#056f65', '#056672', '#055e79', '#08537e', '#1a498f', '#21438a', '#443b84', '#59337f', '#672b7b', '#73276d', '#8d275a'],
				['#666', '#851e3e', '#962632', '#9f312a', '#a9411e', '#ad5717', '#af6e12', '#ae820a', '#ab8f06', '#988a15', '#778720', '#347b2f', '#0a7146', '#0a6950', '#0a6157', '#0a5963', '#0a5369', '#0d496d', '#1c417a', '#223c77', '#3e3572', '#502e6e', '#5b286a', '#65255f', '#7c244f'],
				['#555', '#711d36', '#7f232c', '#862c26', '#8e391c', '#914a17', '#935d13', '#926d0c', '#907709', '#817315', '#66711e', '#31672a', '#0f5f3c', '#0f5944', '#0f524a', '#0f4c53', '#0f4758', '#113f5b', '#1d3966', '#223563', '#392f5f', '#472a5c', '#502559', '#582250', '#6a2243'],
				['#444', '#5e1c2d', '#682127', '#6d2721', '#73301b', '#763e16', '#774c13', '#77580e', '#755f0c', '#695c15', '#565a1b', '#2d5424', '#144e33', '#144839', '#14443d', '#143f44', '#143b47', '#16364a', '#1f3052', '#222d50', '#332a4d', '#3e254a', '#452148', '#4b2041', '#581f38'],
				['#333', '#4a1b25', '#511e21', '#54221d', '#582819', '#5a3116', '#5b3b14', '#5b4310', '#5a470f', '#524515', '#454419', '#2a401f', '#193c29', '#19382d', '#193530', '#193234', '#192f36', '#1a2c38', '#20283e', '#22263c', '#2e243a', '#352138', '#3a1e37', '#3e1d32', '#461d2c'],
				['#222', '#37191d', '#3a1b1b', '#3c1d19', '#3e2017', '#3f2515', '#3f2914', '#3f2d13', '#3e3012', '#3a2f15', '#342e17', '#262c1a', '#1e2a1f', '#1e2821', '#1e2722', '#1e2525', '#1e2426', '#1f2227', '#222029', '#231f29', '#281e28', '#2c1c27', '#2e1b26', '#301b24', '#351a21']
			]
		},

		grayScale: {
			name: 'Gray Scale',
			colors: [
				['#000', '#0A0A0A', '#141414', '#1F1F1F', '#292929', '#333333', '#3D3D3D', '#474747', '#525252', '#5C5C5C', '#666666', '#707070', '#7A7A7A', '#858585', '#8F8F8F', '#999999', '#A3A3A3', '#ADADAD', '#B8B8B8', '#C2C2C2', '#CCCCCC', '#D6D6D6', '#E0E0E0', '#EBEBEB', '#F5F5F5']
			]
		},

		blackAndWhite: {
			name: 'Black & White',
			colors: [
				['#000'],
				['#fff']
			]
		},

		paleTone: {
			name: 'Pale Tone',
			colors: [
			]
		},

		vividTone: {
			name: 'Vivid Tone',
			colors: [
			]
		},

		darkTone: {
			name: 'Dark Tone',
			colors: [
			]
		},

	};

	// ===========================================================
	// init
	// ===========================================================
	(function() {

		// make table
		var makeTable = function( title, idName, className ) {
			var htmlTag = [
				'<h2>', title, '</h2>',
				'<div id="', idName, '" class="', className, '">',
					'<table>',
						'<tbody>',
							'<tr>',
								'<td>',
									'&nbsp;',
								'</td>',
							'</tr>',
						'</tbody>',
					'</table>',
					'<div class="caption"></div>',
				'</div>'
			].join( '' );
			return htmlTag;
		}

		// clone content
		var cloneContent = function( cloneTarget, appendTarget, cloneCount ) {
			while ( cloneCount ) {
				appendTarget.append( cloneTarget.clone() );
				cloneCount--;
			}
		}

		// concat array
		var concatArr = function( arr ) {
			var arrLength = arr.length;
			var result = arr[ 0 ];
			for ( var i = 1; i < arrLength; i++ ) {
				result = result.concat( arr[ i ] );
			}
			return result;
		}

		for ( var i in colorPalettes ) {

			if ( colorPalettes[ i ].colors.length == 0 ) continue;

			var title = colorPalettes[ i ].name;
			var className = 'color-palette-wrapper';
			$( '#colorPalettes' ).append( makeTable( title, i, className ) );

			var $tdCloneTarget = $( 'td:first', '#' + i );
			var $tdAppendTarget = $( 'tr', '#' + i );
			var tdCloneCount = colorPalettes[ i ].colors[ 0 ].length - 1;
			cloneContent( $tdCloneTarget, $tdAppendTarget, tdCloneCount );

			var $trCloneTarget = $( 'tr:first', '#' + i );
			var $trAppendTarget = $( 'tbody', '#' + i );
			var trCloneCount = colorPalettes[ i ].colors.length - 1;
			cloneContent( $trCloneTarget, $trAppendTarget, trCloneCount );

			colorPalettes[ i ].colors = concatArr( colorPalettes[ i ].colors );
			var $eachTarget = $( 'td', '#' + i );
			//var $caption = $( '.caption', '#' + i );
			$eachTarget.each(function( e ){
				$(this).css( 'background-color', colorPalettes[ i ].colors[ e ] );
				//$( '<span/>' ).text( colorPalettes[ i ].colors[ e ] + ' ' ).appendTo( $caption );
			});
		}

	}());

	// ===========================================================
	// functions
	// ===========================================================
	// tdIndex
	var tdIndex = function( thisObj ){

		var index = $( thisObj ).parents( 'table' ).find( 'td' ).index( thisObj );
		return index;

	}

	// addCaptionColor
	var addCaptionColor = function( thisObj, property ){

		var thisIndex = tdIndex( thisObj );
		$( thisObj ).parents( '.color-palette-wrapper' )
			.find( '.caption span:eq(' + thisIndex + ')' ).css( property );

	}

	// createMyColorTag
	var createMyColorTag = function( className, cssProperty, colorName ){

		var htmlTag = [
			'<span class="selected-color-wrapper ' + className + '">',
				'<span class="selected-color" style="' + cssProperty + '">&nbsp;</span>',
				'<span class="text">' + colorName + '</span>',
			'</span>'
		].join( '' );
		return htmlTag;

	}

	// this index color
	var thisIndexColor = function( thisObj ) {

		var thisIndex = tdIndex( thisObj );
		var currentPalette = $( thisObj ).parents( '.color-palette-wrapper' ).attr( 'id' );
		var color = colorPalettes[ currentPalette ].colors[ thisIndex ];
		return color;

	}

	//inputのchecked判定
	var checkInputCheckde = function( inputId ){

		if ( inputId[ 0 ] != '#' ) {
			inputId = '#' + inputId;
		}
		return $( inputId ).is( ':checked' );

	}

	// ===========================================================
	// mouse events
	// ===========================================================
	// td hove event
	var $td = $( 'td' );
	$td.mouseover(function(){

		//addCaptionColor( this, { color: '#000' } );
    var color = thisIndexColor( this );
    $( '<span/>' ).addClass( 'hover-color' ).text( color ).appendTo( '#myPalette h2' );

	});

	$td.mouseout(function(){

		//addCaptionColor( this, { color: '#ccc' } );
    $( '.hover-color:first', '#myPalette' ).remove();

	});

	// ===========================================================
	// click events
	// ===========================================================
	// palette slide toggle
	$( 'h2' ).click(function(){

		$( this ).next( 'div' ).slideToggle();

	});

	// color control
	var myColorCounter = 0;
	$td.click(function(){

		var color = thisIndexColor( this );
		var cssProperty = 'background-color:' + color ;

		// background color
		if ( checkInputCheckde( '#changeBackgroundColor' ) ) {

			$( 'body, #myPalette' ).css( 'background-color', color );

		// remove color
		} else if ( $( this ).hasClass( 'selected-td' ) ) {

			var thisClass = $( this ).attr( 'class' );
			var myColor = thisClass.match( /myColor\d*/ ).toString();
			$( this ).removeClass( thisClass ).html( '&nbsp;' );
			$( '.' + myColor, '#myPalette' ).remove();

		// choice color
		} else {

			myColorCounter++;
			var className = 'myColor' + myColorCounter ;
			$( this ).addClass( 'selected-td myColor' + myColorCounter ).text( '●' );
			$( createMyColorTag( className, cssProperty, color ) ).appendTo( '#myPalette' );

		}
	});

	// my palette all delete
	$( '.delete', '#myPalette' ).click(function(){

		$( '.selected-td', '#colorPalettes' ).html( '&nbsp;' ).removeClass( 'selected-td' );
		$( '.selected-color-wrapper', '#myPalette' ).remove();

	});


});
