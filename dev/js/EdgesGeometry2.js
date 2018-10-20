/**
 * @author WestLangley / http://github.com/WestLangley
 *
 */

THREE.EdgesGeometry2 = function ( geometry ) {

	THREE.LineSegmentsGeometry.call( this );

	this.type = 'EdgesGeometry2';

	this.fromWireframeGeometry( new THREE.EdgesGeometry( geometry ) );

	// set colors, maybe

};

THREE.EdgesGeometry2.prototype = Object.assign( Object.create( THREE.LineSegmentsGeometry.prototype ), {

	constructor: THREE.EdgesGeometry2,

	isEdgesGeometry2: true,

	copy: function ( source ) {

		// todo

		return this;

	}

} );