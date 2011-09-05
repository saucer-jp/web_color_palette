$(function(){

	// browser is IE!
	if ( $( '#ieContainer' ).is( ':visible' ) ) return false;

	// ===========================================================
	// palettes data
	// ===========================================================
	var colorPalettes = {

		pureColor: {
			name: 'Pure Color',
			colors: [
				['#ffffff', '#de3428', '#e44b21', '#e9671b', '#ef8314', '#f49e0d', '#faba07', '#ffd600', '#e0d410', '#b7c21a', '#93b823', '#6aad28', '#39a32a', '#26993f', '#268e5d', '#24836c', '#22797c', '#206e8c', '#1e639b', '#1c58ab', '#2e51a4', '#3f4a9d', '#504496', '#623d8e', '#743687', '#852f80', '#942f71', '#a32f63', '#b22f54', '#c02f45', '#cf2f37', '#de3428']
			]
		},

		spectrum: {
			name: 'Spectrum ( High Saturation )',
			colors: [
				['#eaeaea', '#f8d6d4', '#fadbd3', '#fbe1d1', '#fce6d0', '#fdeccf', '#fef1cd', '#fff7cc', '#f9f6cf', '#f1f3d1', '#e9f1d3', '#e1efd4', '#d7edd4', '#d4ebd9', '#d4e8df', '#d3e6e2', '#d3e4e5', '#d2e2e8', '#d2e0eb', '#d2deee', '#d5dced', '#d9dbeb', '#dcdaea', '#e0d8e8', '#e3d7e7', '#e7d5e6', '#ead5e3', '#edd5e0', '#f0d5dd', '#f2d5da', '#f5d5d7', '#f8d6d4'],
				['#dfdfdf', '#f5c2bf', '#f7c9bc', '#f8d1bb', '#fadab9', '#fce2b6', '#feeab5', '#fff3b3', '#f6f2b7', '#e9edba', '#dfeabd', '#d2e6bf', '#c4e3bf', '#bee0c5', '#beddce', '#bddad3', '#bdd7d8', '#bcd4dd', '#bcd0e1', '#bbcde6', '#c0cbe4', '#c5c9e2', '#cbc7e0', '#d0c5dd', '#d5c3db', '#dac1d9', '#dfc1d4', '#e3c1d0', '#e8c1cc', '#ecc1c7', '#f1c1c3', '#f5c2bf'],
				['#d4d4d4', '#f2aea9', '#f4b7a6', '#f6c2a4', '#f9cda1', '#fbd89e', '#fde39c', '#ffef99', '#f3ee9f', '#e2e7a3', '#d4e3a7', '#c3dea9', '#b0daaa', '#a8d6b2', '#a8d2be', '#a7cdc4', '#a7c9cb', '#a6c5d1', '#a5c1d7', '#a4bcdd', '#abb9db', '#b2b7d8', '#b9b4d5', '#c0b1d2', '#c7afcf', '#ceaccc', '#d4acc6', '#daacc1', '#e0acbb', '#e6acb5', '#ecacaf', '#f2aea9'],
				['#cacaca', '#ef9a94', '#f2a590', '#f4b38d', '#f7c18a', '#facf86', '#fddd83', '#ffeb80', '#f0ea88', '#dbe18d', '#c9dc91', '#b5d694', '#9cd195', '#93cc9f', '#93c7ae', '#92c1b6', '#91bcbe', '#90b7c6', '#8fb1cd', '#8eacd5', '#97a8d2', '#9fa5ce', '#a8a2cb', '#b19ec7', '#ba9bc3', '#c297c0', '#ca97b8', '#d197b1', '#d997aa', '#e097a2', '#e7979b', '#ef9a94'],
				['#bfbfbf', '#eb857e', '#ef937a', '#f2a476', '#f5b572', '#f8c56e', '#fcd66a', '#ffe666', '#ece570', '#d4da76', '#bed47b', '#a6ce7e', '#88c87f', '#7dc28c', '#7dbb9e', '#7cb5a7', '#7aafb0', '#79a8ba', '#78a1c3', '#779bcd', '#8297c8', '#8c92c4', '#968fc0', '#a18bbb', '#ac86b7', '#b682b3', '#bf82aa', '#c882a1', '#d18298', '#d9828f', '#e28287', '#eb857e'],
				['#b4b4b5', '#e87169', '#ec8164', '#f0955f', '#f4a85b', '#f7bb56', '#fccf51', '#ffe24d', '#e9e158', '#cdd45f', '#b3cd65', '#97c669', '#74bf6a', '#67b879', '#67b08e', '#66a898', '#64a1a3', '#639aaf', '#6292b9', '#608ac4', '#6d85bf', '#7980ba', '#857cb6', '#9177b0', '#9e72ab', '#aa6da6', '#b46d9c', '#bf6d92', '#c96d87', '#d36d7d', '#dd6d73', '#e87169'],
				['#a9aaaa', '#e55d53', '#e96f4d', '#ed8549', '#f29c43', '#f6b13d', '#fbc839', '#ffde33', '#e6dd40', '#c5ce48', '#a9c64f', '#88bd53', '#61b555', '#51ad65', '#51a57d', '#509c89', '#4e9496', '#4d8ba3', '#4b82af', '#4979bc', '#5874b6', '#656eb1', '#7369ab', '#8164a5', '#905e9f', '#9d5999', '#a9598d', '#b55982', '#c15976', '#cd596a', '#d9595f', '#e55d53'],
				['#9f9f9f', '#e1483e', '#e75d37', '#eb7632', '#f18f2c', '#f5a825', '#fbc120', '#ffda1a', '#e3d828', '#bec831', '#9ebf39', '#79b53e', '#4dac3f', '#3ca352', '#3c996d', '#3a8f7b', '#388689', '#367d98', '#3573a5', '#3369b3', '#4362ad', '#525ca7', '#6257a1', '#725099', '#824a93', '#91448d', '#9f447f', '#ac4473', '#ba4465', '#c64458', '#d4444b', '#e1483e'],
				['#737373', '#de3428', '#e44b21', '#e9671b', '#ef8314', '#f49e0d', '#faba07', '#ffd600', '#e0d410', '#b7c21a', '#93b823', '#6aad28', '#39a32a', '#26993f', '#268e5d', '#24836c', '#22797c', '#206e8c', '#1e639b', '#1c58ab', '#2e51a4', '#3f4a9d', '#504496', '#623d8e', '#743687', '#852f80', '#942f71', '#a32f63', '#b22f54', '#c02f45', '#cf2f37', '#de3428'],
				['#676767', '#c82f24', '#cd441e', '#d25d18', '#d77612', '#dc8e0c', '#e1a706', '#e6c100', '#cabf0e', '#a5af17', '#84a620', '#5f9c24', '#339326', '#228a39', '#228054', '#207661', '#1f6d70', '#1d637e', '#1b598c', '#194f9a', '#294994', '#39438d', '#483d87', '#583780', '#68317a', '#782a73', '#852a66', '#932a59', '#a02a4c', '#ad2a3e', '#ba2a32', '#c82f24'],
				['#5c5c5c', '#b22a20', '#b63c1a', '#ba5216', '#bf6910', '#c37e0a', '#c89506', '#ccab00', '#b3aa0d', '#929b15', '#76931c', '#558a20', '#2e8222', '#1e7a32', '#1e724a', '#1d6956', '#1b6163', '#1a5870', '#184f7c', '#164689', '#254183', '#323b7e', '#403678', '#4e3172', '#5d2b6c', '#6a2666', '#76265a', '#82264f', '#8e2643', '#9a2637', '#a6262c', '#b22a20'],
				['#505050', '#9b241c', '#a03517', '#a34813', '#a75c0e', '#ab6f09', '#af8205', '#b39600', '#9d940b', '#808812', '#678119', '#4a791c', '#28721d', '#1b6b2c', '#1b6341', '#195c4c', '#185557', '#164d62', '#15456d', '#143e78', '#203973', '#2c346e', '#383069', '#452b63', '#51265f', '#5d215a', '#68214f', '#722145', '#7d213b', '#862130', '#912127', '#9b241c'],
				['#454545', '#851f18', '#892d14', '#8c3e10', '#8f4f0c', '#925f08', '#967004', '#998000', '#867f0a', '#6e7410', '#586e15', '#406818', '#226219', '#175c26', '#175538', '#164f41', '#14494a', '#134254', '#123b5d', '#113567', '#1c3162', '#262c5e', '#30295a', '#3b2555', '#462051', '#501c4d', '#591c44', '#621c3b', '#6b1c32', '#731c29', '#7c1c21', '#851f18'],
				['#393939', '#6f1a14', '#722611', '#75340e', '#78420a', '#7a4f07', '#7d5d04', '#806b00', '#706a08', '#5c610d', '#4a5c12', '#355714', '#1d5215', '#134d20', '#13472f', '#124236', '#113d3e', '#103746', '#0f324e', '#0e2c56', '#172952', '#20254f', '#28224b', '#311f47', '#3a1b44', '#431840', '#4a1839', '#521832', '#59182a', '#601823', '#68181c', '#6f1a14'],
				['#2e2e2e', '#591510', '#5b1e0d', '#5d290b', '#603408', '#623f05', '#644a03', '#665600', '#5a5506', '#494e0a', '#3b4a0e', '#2a4510', '#174111', '#0f3d19', '#0f3925', '#0e342b', '#0e3032', '#0d2c38', '#0c283e', '#0b2344', '#122042', '#191e3f', '#201b3c', '#271839', '#2e1636', '#351333', '#3b132d', '#411328', '#471322', '#4d131c', '#531316', '#591510'],
				['#222222', '#43100c', '#44170a', '#461f08', '#482706', '#492f04', '#4b3802', '#4d4000', '#434005', '#373a08', '#2c370b', '#20340c', '#11310d', '#0b2e13', '#0b2b1c', '#0b2720', '#0a2425', '#0a212a', '#091e2f', '#081a33', '#0e1831', '#13162f', '#18142d', '#1d122b', '#231029', '#280e26', '#2c0e22', '#310e1e', '#350e19', '#3a0e15', '#3e0e11', '#43100c'],
				['#171717', '#2c0a08', '#2e0f07', '#2f1505', '#301a04', '#312003', '#322501', '#332b00', '#2d2a03', '#252705', '#1d2507', '#152308', '#0b2108', '#081f0d', '#081c13', '#071a16', '#071819', '#06161c', '#06141f', '#061222', '#091021', '#0d0f1f', '#100e1e', '#140c1c', '#170b1b', '#1b091a', '#1e0917', '#210914', '#240911', '#26090e', '#29090b', '#2c0a08']
			]
		},

		complementaryColor1: {
			name: 'Complementary Color ( Pure Color )',
			colors: [
				['#eee', '#de3428', '#e44b21', '#e9671b', '#ef8314', '#f49e0d', '#faba07', '#ffd600', '#e0d410', '#b7c21a', '#93b823', '#6aad28', '#39a32a', '#26993f', '#268e5d', '#24836c', '#22797c', '#206e8c', '#1e639b', '#1c58ab', '#2e51a4', '#3f4a9d', '#504496', '#623d8e', '#743687', '#852f80', '#942f71', '#a32f63', '#b22f54', '#c02f45', '#cf2f37', '#eee'],
				['#eee', '#22797c', '#206e8c', '#1e639b', '#1c58ab', '#2e51a4', '#3f4a9d', '#504496', '#623d8e', '#743687', '#852f80', '#942f71', '#a32f63', '#b22f54', '#c02f45', '#cf2f37', '#de3428', '#e44b21', '#e9671b', '#ef8314', '#f49e0d', '#faba07', '#ffd600', '#e0d410', '#b7c21a', '#93b823', '#6aad28', '#39a32a', '#26993f', '#268e5d', '#24836c', '#eee']
			]
		},

		complementaryColor2: {
			name: 'Complementary Color ( 10 step )',
			colors: [
				['#eee', '#de0f00', '#e43100', '#e95600', '#ef7900', '#f49900', '#fab800', '#ffd600', '#e0d300', '#b5c200', '#8bb802', '#5aad09', '#1fa30d', '#0a9929', '#0c8e51', '#0c8366', '#0c787c', '#07678c', '#02569b', '#0048ab', '#103ca4', '#23319d', '#392996', '#54238e', '#6e1e87', '#85177f', '#941468', '#a31253', '#b20f3d', '#c00c28', '#cf0a14', '#eee'],
				['#eee', '#c21c10', '#c83912', '#cd5813', '#d47514', '#d99116', '#e0ab18', '#e6c51a', '#cdc219', '#a8b318', '#85a917', '#5c9e1b', '#2a941c', '#198b32', '#1a8251', '#1a7962', '#1a7074', '#176482', '#15588f', '#144e9d', '#234699', '#343f96', '#483b92', '#5d358b', '#703084', '#80287b', '#8a2467', '#942054', '#9f1d42', '#aa1a31', '#b61820', '#eee'],
				['#eee', '#a62a21', '#ac4123', '#b25a26', '#b87129', '#bf882c', '#c69f30', '#cdb534', '#b9b133', '#9ca42f', '#7f9a2d', '#5e8f2d', '#36852b', '#287d3a', '#287652', '#286f5e', '#28696b', '#276177', '#275a83', '#29548f', '#36508f', '#454e8f', '#574d8e', '#654888', '#714180', '#7b3978', '#803466', '#852e55', '#8c2b46', '#942839', '#9d262c', '#eee'],
				['#eee', '#8a3731', '#904835', '#965b39', '#9d6e3d', '#a48043', '#ad9249', '#b5a44f', '#a6a14c', '#8f9447', '#798b42', '#5f813f', '#41763a', '#367043', '#376b52', '#356559', '#366163', '#385e6d', '#3a5b77', '#3d5a82', '#495b84', '#575c87', '#655f8b', '#6e5a85', '#73537d', '#774b74', '#774365', '#763c56', '#7a384b', '#7f3742', '#833539', '#eee'],
				['#eee', '#6e4542', '#745046', '#7b5d4c', '#816a52', '#8a7759', '#938661', '#9c9469', '#929066', '#83855e', '#737c58', '#617251', '#4d6749', '#45624b', '#455f53', '#435b55', '#445a5a', '#485b62', '#4c5d6b', '#526074', '#5c657a', '#686b80', '#747187', '#766d82', '#746479', '#725c71', '#6d5364', '#674a57', '#67464f', '#69454a', '#6a4345', '#eee'],
				['#eee', '#525252', '#585858', '#5f5f5f', '#666666', '#6f6f6f', '#797979', '#838383', '#7f7f7f', '#767676', '#6d6d6d', '#636363', '#585858', '#545454', '#535353', '#515151', '#525252', '#585858', '#5f5f5f', '#666666', '#6f6f6f', '#797979', '#838383', '#7f7f7f', '#767676', '#6d6d6d', '#636363', '#585858', '#545454', '#535353', '#515151', '#eee'],
				['#eee', '#445a5a', '#485b62', '#4c5d6b', '#526074', '#5c657a', '#686b80', '#747187', '#766d82', '#746479', '#725c71', '#6d5364', '#674a57', '#67464f', '#69454a', '#6a4345', '#6e4542', '#745046', '#7b5d4c', '#816a52', '#8a7759', '#938661', '#9c9469', '#929066', '#83855e', '#737c58', '#617251', '#4d6749', '#45624b', '#455f53', '#435b55', '#eee'],
				['#eee', '#366163', '#385e6d', '#3a5b77', '#3d5a82', '#495b84', '#575c87', '#655f8b', '#6e5a85', '#73537d', '#774b74', '#774365', '#763c56', '#7a384b', '#7f3742', '#833539', '#8a3731', '#904835', '#965b39', '#9d6e3d', '#a48043', '#ad9249', '#b5a44f', '#a6a14c', '#8f9447', '#798b42', '#5f813f', '#41763a', '#367043', '#376b52', '#356559', '#eee'],
				['#eee', '#28696b', '#276177', '#275a83', '#29548f', '#36508f', '#454e8f', '#574d8e', '#654888', '#714180', '#7b3978', '#803466', '#852e55', '#8c2b46', '#942839', '#9d262c', '#a62a21', '#ac4123', '#b25a26', '#b87129', '#bf882c', '#c69f30', '#cdb534', '#b9b133', '#9ca42f', '#7f9a2d', '#5e8f2d', '#36852b', '#287d3a', '#287652', '#286f5e', '#eee'],
				['#eee', '#1a7074', '#176482', '#15588f', '#144e9d', '#234699', '#343f96', '#483b92', '#5d358b', '#703084', '#80287b', '#8a2467', '#942054', '#9f1d42', '#aa1a31', '#b61820', '#c21c10', '#c83912', '#cd5813', '#d47514', '#d99116', '#e0ab18', '#e6c51a', '#cdc219', '#a8b318', '#85a917', '#5c9e1b', '#2a941c', '#198b32', '#1a8251', '#1a7962', '#eee'],
				['#eee', '#0c787c', '#07678c', '#02569b', '#0048ab', '#103ca4', '#23319d', '#392996', '#54238e', '#6e1e87', '#85177f', '#941468', '#a31253', '#b20f3d', '#c00c28', '#cf0a14', '#de0f00', '#e43100', '#e95600', '#ef7900', '#f49900', '#fab800', '#ffd600', '#e0d300', '#b5c200', '#8bb802', '#5aad09', '#1fa30d', '#0a9929', '#0c8e51', '#0c8366', '#eee'] 
			]
		},

		grayScale: {
			name: 'Gray Scale',
			colors: [
				['#000000', '#080808', '#101010', '#191919', '#212121', '#292929', '#313131', '#3a3a3a', '#424242', '#4a4a4a', '#525252', '#5a5a5a', '#636363', '#6b6b6b', '#737373', '#7b7b7b', '#848484', '#8c8c8c', '#949494', '#9c9c9c', '#a5a5a5', '#adadad', '#b5b5b5', '#bdbdbd', '#c5c5c5', '#cecece', '#d6d6d6', '#dedede', '#e6e6e6', '#efefef', '#f7f7f7', '#ffffff']
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

	var data = {
		defaultTextColor: '#000',
		textHoverColor: '#08f',
		option: {
			disableHoverAnimation: false
		}
	};

	// ===========================================================
	// init
	// ===========================================================
	(function() {

		// make table
		var makeTable = function( title, idName, className ) {
			var htmlTag = [
				'<h2 class="jquery-color">', title, '</h2>',
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
		};

		// clone content
		var cloneContent = function( cloneTarget, appendTarget, cloneCount ) {
			while ( cloneCount ) {
				appendTarget.append( cloneTarget.clone() );
				cloneCount--;
			}
		};

		// concat array
		var concatArr = function( arr ) {
			var arrLength = arr.length;
			var result = arr[ 0 ];
			for ( var i = 1; i < arrLength; i++ ) {
				result = result.concat( arr[ i ] );
			}
			return result;
		};

		for ( var i in colorPalettes ) {

			if ( colorPalettes[ i ].colors.length == 0 ) continue;

			var title = colorPalettes[ i ].name;
			var className = 'none color-palette-wrapper';
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

			data.nowBGColor = $( 'body' ).css( 'background-color' );
		}

	}());

	// ===========================================================
	// functions
	// ===========================================================
	// tdIndex
	var tdIndex = function( thisObj ){

		var index = $( thisObj ).parents( 'table' ).find( 'td' ).index( thisObj );
		return index;

	};

	// addCaptionColor
	var addCaptionColor = function( thisObj, property ){

		var thisIndex = tdIndex( thisObj );
		$( thisObj ).parents( '.color-palette-wrapper' )
			.find( '.caption span:eq(' + thisIndex + ')' ).css( property );

	};

	// createMyColorTag
	var createMyColorTag = function( className, cssProperty, colorName ){

		var htmlTag = [
			'<div class="selected-color-wrapper ' + className + '">',
				'<span class="selected-color" style="' + cssProperty + '">&nbsp;</span>',
				'<span class="text">' + colorName + '</span>',
			'</div>'
		].join( '' );
		return htmlTag;

	};

	// this index color
	var thisIndexColor = function( thisObj ) {

		var thisIndex = tdIndex( thisObj );
		var currentPalette = $( thisObj ).parents( '.color-palette-wrapper' ).attr( 'id' );
		var color = colorPalettes[ currentPalette ].colors[ thisIndex ];
		return color;

	};

	//inputのchecked判定
	var checkInputCheckde = function( inputId ){

		if ( inputId[ 0 ] != '#' ) {
			inputId = '#' + inputId;
		}
		return $( inputId ).is( ':checked' );

	};

	// ===========================================================
	// mouse events
	// ===========================================================
	// td hove event
	var $td = $( 'td' );
	$td.mouseover(function(){

		//addCaptionColor( this, { color: '#000' } );
		var color = thisIndexColor( this );
		$( '<span/>' ).addClass( 'hover-color' ).text( color ).appendTo( '#myPalette h2' );

		// disable hover animation
		if ( !data.option.disableHoverAnimation ) {
			$( this ).stop( true, true ).animate({ opacity: '0.5' }, 400, 'swing', function(){
				$( this ).animate({ opacity: '1' }, 100, 'swing' );
			});
		}

	});

	$td.mouseout(function(){

		//addCaptionColor( this, { color: '#ccc' } );
    $( '.hover-color:first', '#myPalette' ).remove();

	});

	// ===========================================================
	// hover events
	// ===========================================================
	var $jqueryColor = $( '.jquery-color' );
	$jqueryColor.hover(function(){
		$(this).stop( true, true ).animate({ color: data.textHoverColor });
	}, function(){
		$(this).stop( true, true ).animate({ color: data.defaultTextColor });
	});

	// ===========================================================
	// click events
	// ===========================================================
	// palette slide toggle
	$( 'h2' ).click(function(){

		$( this ).next( 'div' ).slideToggle();

	});

	// disable hover animation
	$( '#disableHoverAnimation' ).click(function(){
		if ( checkInputCheckde( '#disableHoverAnimation' ) ) {
			data.option.disableHoverAnimation = true;
		} else {
			data.option.disableHoverAnimation = false;
		}
	});

	// color control
	var myColorCounter = 0;
	$td.click(function(){

		var color = thisIndexColor( this );
		var cssProperty = 'background-color:' + color ;
		data.nowBGColor = color ;

		// background color
		if ( checkInputCheckde( '#changeBackgroundColor' ) ) {

			$( 'body, #myPalette' ).css( 'background-color', color );

		// remove color
		} else if ( $( this ).hasClass( 'selected-td' ) ) {

			var thisClass = $( this ).attr( 'class' );
			var myColor = thisClass.match( /myColor\d*/ ).toString();
			console.log( 'remove' + myColor );
			$( this ).removeClass( thisClass ).html( '&nbsp;' );
			$( '.' + myColor, '#myPalette' ).remove();

		// choice color
		} else {

			myColorCounter++;
			var className = 'myColor' + myColorCounter ;
			console.log( 'odd' + className);
			$( this ).addClass( 'selected-td myColor' + myColorCounter ).text( '●' );
			$( createMyColorTag( className, cssProperty, color ) ).appendTo( '#sortable' );

		}
	});

	// my palette all delete
	$( '.delete', '#myPalette' ).click(function(){

		$( '.selected-td', '#colorPalettes' ).html( '&nbsp;' ).removeClass( 'selected-td' );
		$( '.selected-color-wrapper', '#myPalette' ).remove();

	});

  $("#sortable").sortable({
    items: ".selected-color-wrapper",
    cursor: "move",
    handle: ".selected-color",
    opacity: 0.5
  });

});
