/*
 |--------------------------------------------------------------------------
 | Setup
 |--------------------------------------------------------------------------
 */
	// Node Modules
	const RoutesVersioning = require( 'express-routes-versioning' )();

	// Controllers
	const Controllers = {
		v_1_2: {
			Afdeling: require( _directory_base + '/app/v1.2/Http/Controllers/AfdelingController.js' ),
			Block: require( _directory_base + '/app/v1.2/Http/Controllers/BlockController.js' ),
			Comp: require( _directory_base + '/app/v1.2/Http/Controllers/CompController.js' ),
			Est: require( _directory_base + '/app/v1.2/Http/Controllers/EstController.js' ),
			LandUse: require( _directory_base + '/app/v1.2/Http/Controllers/LandUseController.js' ),
			Region: require( _directory_base + '/app/v1.2/Http/Controllers/RegionController.js' ),
		},
		v_1_1: {
			Afdeling: require( _directory_base + '/app/v1.1/Http/Controllers/AfdelingController.js' ),
			Block: require( _directory_base + '/app/v1.1/Http/Controllers/BlockController.js' ),
			Comp: require( _directory_base + '/app/v1.1/Http/Controllers/CompController.js' ),
			Est: require( _directory_base + '/app/v1.1/Http/Controllers/EstController.js' ),
			LandUse: require( _directory_base + '/app/v1.1/Http/Controllers/LandUseController.js' ),
			Region: require( _directory_base + '/app/v1.1/Http/Controllers/RegionController.js' ),
		},
		v_1_0: {
			Afdeling: require( _directory_base + '/app/v1.1/Http/Controllers/AfdelingController.js' ),
			Block: require( _directory_base + '/app/v1.1/Http/Controllers/BlockController.js' ),
			Comp: require( _directory_base + '/app/v1.1/Http/Controllers/CompController.js' ),
			Est: require( _directory_base + '/app/v1.1/Http/Controllers/EstController.js' ),
			LandUse: require( _directory_base + '/app/v1.1/Http/Controllers/LandUseController.js' ),
			Region: require( _directory_base + '/app/v1.1/Http/Controllers/RegionController.js' ),
		}
	}

	// Middleware
	const Middleware = {
		v_1_2: {
			VerifyToken: require( _directory_base + '/app/v1.2/Http/Middleware/VerifyToken.js' )
		},
		v_1_1: {
			VerifyToken: require( _directory_base + '/app/v1.1/Http/Middleware/VerifyToken.js' )
		},
		v_1_0: {
			VerifyToken: require( _directory_base + '/app/v1.0/Http/Middleware/VerifyToken.js' )
		}
	}
	
/*
 |--------------------------------------------------------------------------
 | Routing
 |--------------------------------------------------------------------------
 */
	module.exports = ( app ) => {

		/*
		 |--------------------------------------------------------------------------
		 | Welcome Message
		 |--------------------------------------------------------------------------
		 */
			app.get( '/', ( req, res ) => {
				res.json( { 
					application: {
						name : config.app.name,
						port : config.app.port[config.app.env],
						environment : config.app.env
					} 
				} )
			} );

		/*
		 |--------------------------------------------------------------------------
		 | API Versi 1.2
		 |--------------------------------------------------------------------------
		 */
		app.get( '/api/v1.2/afdeling/all', Middleware.v_1_2.VerifyToken, Controllers.v_1_2.Afdeling.find_all );
		app.get( '/api/v1.2/afdeling/q', Middleware.v_1_2.VerifyToken, Controllers.v_1_2.Afdeling.find_all );
		//app.post( '/sync-tap/afdeling', AfdelingController.createOrUpdate );
		app.get( '/api/v1.2/sync-mobile/afdeling/:start_date/:end_date', Middleware.v_1_2.VerifyToken, Controllers.v_1_2.Afdeling.sync_mobile );
		app.get( '/api/v1.2/afdeling', Middleware.v_1_2.VerifyToken, Controllers.v_1_2.Afdeling.find );
		//app.post( 'api/v1.2/afdeling', AfdelingController.create );
		app.get( '/api/v1.2/afdeling/:id', Controllers.v_1_2.Afdeling.find_one );
		//app.put( '/afdeling/:id', AfdelingController.update );
		//app.delete( '/afdeling/:id', AfdelingController.delete );

		// Block
		app.get( '/api/v1.2/block/all', Controllers.v_1_2.Block.find_all );
		app.get( '/api/v1.2/block/q', Controllers.v_1_2.Block.find_all );
		//app.post( '/api/v1.2/sync-tap/block', BlockController.createOrUpdate );
		app.get( '/api/v1.2/sync-mobile/block/:start_date/:end_date', Middleware.v_1_2.VerifyToken, Controllers.v_1_2.Block.sync_mobile );
		app.get( '/api/v1.2/block', Middleware.v_1_2.VerifyToken, Controllers.v_1_2.Block.find );
		//app.post( '/api/v1.2/block', BlockController.create );
		app.get( '/api/v1.2/block/:id', Controllers.v_1_2.Block.find_one );
		//app.put( '/api/v1.2/block/:id', BlockController.update );
		//app.delete( '/api/v1.2/block/:id', BlockController.delete );
		app.post( '/api/v1.2/geom/design/block', Middleware.v_1_2.VerifyToken, Controllers.v_1_2.Block.find_one_geom );

		// Comp
		app.get( '/api/v1.2/comp/all', Controllers.v_1_2.Comp.find_all );
		app.get( '/api/v1.2/comp/q', Controllers.v_1_2.Comp.find_all );
		//app.post( '/api/v1.2/sync-tap/comp', token_verify, CompController.createOrUpdate );
		app.get( '/api/v1.2/sync-mobile/comp/:start_date/:end_date', Middleware.v_1_2.VerifyToken, Controllers.v_1_2.Comp.sync_mobile );
		//app.delete( '/api/v1.2/comp/:id', token_verify, CompController.delete );
		app.get( '/api/v1.2/comp', Middleware.v_1_2.VerifyToken, Controllers.v_1_2.Comp.find );
		//app.post( '/api/v1.2/comp', CompController.create );
		app.get( '/api/v1.2/comp/:id', Controllers.v_1_2.Comp.find_one );
		//app.put( '/api/v1.2/comp/:id', CompController.update );

		// Est
		app.get( '/api/v1.2/est/all', Middleware.v_1_2.VerifyToken, Controllers.v_1_2.Est.find_all );
		app.get( '/api/v1.2/est/q', Middleware.v_1_2.VerifyToken, Controllers.v_1_2.Est.find_all );
		//app.post( '/api/v1.2/sync-tap/est', verifyToken, EstController.createOrUpdate );
		app.get( '/api/v1.2/sync-mobile/est/:start_date/:end_date', Middleware.v_1_2.VerifyToken, Controllers.v_1_1.Est.sync_mobile );
		app.get( '/api/v1.2/est', Middleware.v_1_2.VerifyToken, Controllers.v_1_2.Est.find );
		//app.post( '/api/v1.2/est', EstController.create );
		app.get( '/api/v1.2/est/:id', Middleware.v_1_2.VerifyToken, Controllers.v_1_2.Est.find_one );
		//app.put( '/api/v1.2/est/:id', EstController.update );
		//app.delete( '/api/v1.2/est/:id', EstController.delete );

		// Land Use
		app.get( '/api/v1.2/land-use/all', Middleware.v_1_2.VerifyToken, Controllers.v_1_2.LandUse.find_all );
		app.get( '/api/v1.2/land-use/q', Middleware.v_1_2.VerifyToken, Controllers.v_1_2.LandUse.find_all );
		app.get( '/api/v1.2/report/land-use/:id', Middleware.v_1_2.VerifyToken, Controllers.v_1_2.LandUse.findOneForReport );
		app.get( '/api/v1.2/land-use/q', Middleware.v_1_2.VerifyToken, Controllers.v_1_2.LandUse.find_all );
		app.get( '/api/v1.2/land-use', Middleware.v_1_2.VerifyToken, Controllers.v_1_2.LandUse.find );
		//app.post( '/api/v1.2/sync-tap/land-use', token_verify, LandUseController.createOrUpdate );
		app.get( '/api/v1.2/sync-mobile/land-use/:start_date/:end_date', Middleware.v_1_2.VerifyToken, Controllers.v_1_2.LandUse.sync_mobile );

		 // Region
		app.get( '/api/v1.2/region/all', Controllers.v_1_2.Region.find_all );
		app.get( '/api/v1.2/region/q', Controllers.v_1_2.Region.find_all );
		//app.post( '/api/v1.2/sync-tap/region', Middleware.v_1_1.VerifyToken, Controllers.v_1_1.Region.createOrUpdate );
		app.get( '/api/v1.2/sync-mobile/region/:start_date/:end_date', Middleware.v_1_2.VerifyToken, Controllers.v_1_2.Region.sync_mobile );
		//app.post( '/api/v1.2/region', Middleware.v_1_2.VerifyToken, Controllers.v_1_2.Region.create );
		app.get( '/api/v1.2/region', Middleware.v_1_2.VerifyToken, Controllers.v_1_2.Region.find );
		//app.get( '/api/v1.2/region/:id', Middleware.v_1_2.VerifyToken, Controllers.v_1_2.Region.findOne );
		//app.put( '/api/v1.2/region/:id', Middleware.v_1_2.VerifyToken, Controllers.v_1_2.Region.update );
		//app.delete( '/api/v1.2/region/:id', Middleware.v_1_2.VerifyToken, Controllers.v_1_2.Region.delete );
		
		/*
		 |--------------------------------------------------------------------------
		 | API Versi 1.1
		 |--------------------------------------------------------------------------
		 */
			app.get( '/api/v1.1/afdeling/all', Middleware.v_1_1.VerifyToken, Controllers.v_1_1.Afdeling.find_all );
			app.get( '/api/v1.1/afdeling/q', Middleware.v_1_1.VerifyToken, Controllers.v_1_1.Afdeling.find_all );
			//app.post( '/sync-tap/afdeling', AfdelingController.createOrUpdate );
			app.get( '/api/v1.1/sync-mobile/afdeling/:start_date/:end_date', Middleware.v_1_1.VerifyToken, Controllers.v_1_1.Afdeling.sync_mobile );
			app.get( '/api/v1.1/afdeling', Middleware.v_1_1.VerifyToken, Controllers.v_1_1.Afdeling.find );
			//app.post( 'api/v1.1/afdeling', AfdelingController.create );
			app.get( '/api/v1.1/afdeling/:id', Controllers.v_1_1.Afdeling.find_one );
			//app.put( '/afdeling/:id', AfdelingController.update );
			//app.delete( '/afdeling/:id', AfdelingController.delete );

			// Block
			app.get( '/api/v1.1/block/all', Controllers.v_1_1.Block.find_all );
			app.get( '/api/v1.1/block/q', Controllers.v_1_1.Block.find_all );
			//app.post( '/api/v1.1/sync-tap/block', BlockController.createOrUpdate );
			app.get( '/api/v1.1/sync-mobile/block/:start_date/:end_date', Middleware.v_1_1.VerifyToken, Controllers.v_1_1.Block.sync_mobile );
			app.get( '/api/v1.1/block', Middleware.v_1_1.VerifyToken, Controllers.v_1_1.Block.find );
			//app.post( '/api/v1.1/block', BlockController.create );
			app.get( '/api/v1.1/block/:id', Controllers.v_1_1.Block.find_one );
			//app.put( '/api/v1.1/block/:id', BlockController.update );
			//app.delete( '/api/v1.1/block/:id', BlockController.delete );
			app.post( '/api/v1.1/geom/design/block', Middleware.v_1_1.VerifyToken, Controllers.v_1_1.Block.find_one_geom );

			// Comp
			app.get( '/api/v1.1/comp/all', Controllers.v_1_1.Comp.find_all );
			app.get( '/api/v1.1/comp/q', Controllers.v_1_1.Comp.find_all );
			//app.post( '/api/v1.1/sync-tap/comp', token_verify, CompController.createOrUpdate );
			app.get( '/api/v1.1/sync-mobile/comp/:start_date/:end_date', Middleware.v_1_1.VerifyToken, Controllers.v_1_1.Comp.sync_mobile );
			//app.delete( '/api/v1.1/comp/:id', token_verify, CompController.delete );
			app.get( '/api/v1.1/comp', Middleware.v_1_1.VerifyToken, Controllers.v_1_1.Comp.find );
			//app.post( '/api/v1.1/comp', CompController.create );
			app.get( '/api/v1.1/comp/:id', Controllers.v_1_1.Comp.find_one );
			//app.put( '/api/v1.1/comp/:id', CompController.update );

			// Est
			app.get( '/api/v1.1/est/all', Middleware.v_1_1.VerifyToken, Controllers.v_1_1.Est.find_all );
			app.get( '/api/v1.1/est/q', Middleware.v_1_1.VerifyToken, Controllers.v_1_1.Est.find_all );
			//app.post( '/api/v1.1/sync-tap/est', verifyToken, EstController.createOrUpdate );
			app.get( '/api/v1.1/sync-mobile/est/:start_date/:end_date', Middleware.v_1_1.VerifyToken, Controllers.v_1_1.Est.sync_mobile );
			app.get( '/api/v1.1/est', Middleware.v_1_1.VerifyToken, Controllers.v_1_1.Est.find );
			//app.post( '/api/v1.1/est', EstController.create );
			app.get( '/api/v1.1/est/:id', Middleware.v_1_1.VerifyToken, Controllers.v_1_1.Est.find_one );
			//app.put( '/api/v1.1/est/:id', EstController.update );
			//app.delete( '/api/v1.1/est/:id', EstController.delete );

			// Land Use
			app.get( '/api/v1.1/land-use/all', Middleware.v_1_1.VerifyToken, Controllers.v_1_1.LandUse.find_all );
			app.get( '/api/v1.1/land-use/q', Middleware.v_1_1.VerifyToken, Controllers.v_1_1.LandUse.find_all );
			app.get( '/api/v1.1/report/land-use/:id', Middleware.v_1_1.VerifyToken, Controllers.v_1_1.LandUse.findOneForReport );
			app.get( '/api/v1.1/land-use/q', Middleware.v_1_1.VerifyToken, Controllers.v_1_1.LandUse.find_all );
			app.get( '/api/v1.1/land-use', Middleware.v_1_1.VerifyToken, Controllers.v_1_1.LandUse.find );
			//app.post( '/api/v1.1/sync-tap/land-use', token_verify, LandUseController.createOrUpdate );
			app.get( '/api/v1.1/sync-mobile/land-use/:start_date/:end_date', Middleware.v_1_1.VerifyToken, Controllers.v_1_1.LandUse.sync_mobile );

		 	// Region
			app.get( '/api/v1.1/region/all', Controllers.v_1_1.Region.find_all );
			app.get( '/api/v1.1/region/q', Controllers.v_1_1.Region.find_all );
			//app.post( '/api/v1.1/sync-tap/region', Middleware.v_1_1.VerifyToken, Controllers.v_1_1.Region.createOrUpdate );
			app.get( '/api/v1.1/sync-mobile/region/:start_date/:end_date', Middleware.v_1_1.VerifyToken, Controllers.v_1_1.Region.sync_mobile );
			//app.post( '/api/v1.1/region', Middleware.v_1_0.VerifyToken, Controllers.v_1_1.Region.create );
			app.get( '/api/v1.1/region', Middleware.v_1_1.VerifyToken, Controllers.v_1_1.Region.find );
			//app.get( '/api/v1.1/region/:id', Middleware.v_1_1.VerifyToken, Controllers.v_1_1.Region.findOne );
			//app.put( '/api/v1.1/region/:id', Middleware.v_1_1.VerifyToken, Controllers.v_1_1.Region.update );
			//app.delete( '/api/v1.1/region/:id', Middleware.v_1_1.VerifyToken, Controllers.v_1_1.Region.delete );

		/*
		 |--------------------------------------------------------------------------
		 | Old API
		 |--------------------------------------------------------------------------
		 */

		 	// Afdeling
		 	app.get( '/afdeling/all', Middleware.v_1_0.VerifyToken, Controllers.v_1_0.Afdeling.find_all );
			app.get( '/afdeling/q', Middleware.v_1_0.VerifyToken, Controllers.v_1_0.Afdeling.find_all );
			app.post( '/sync-tap/afdeling', AfdelingController.createOrUpdate );
			app.get( '/sync-mobile/afdeling/:start_date/:end_date', Middleware.v_1_0.VerifyToken, Controllers.v_1_0.Afdeling.sync_mobile );
			app.get( '/afdeling', Middleware.v_1_0.VerifyToken, Controllers.v_1_0.Afdeling.find );
			//app.post( '/afdeling', AfdelingController.create );
			app.get( '/afdeling/:id', Controllers.v_1_0.Afdeling.find_one );
			//app.put( '/afdeling/:id', AfdelingController.update );
			//app.delete( '/afdeling/:id', AfdelingController.delete );

			// Block
			app.get( '/block/all', Controllers.v_1_0.Block.find_all );
			app.get( '/block/q', Controllers.v_1_0.Block.find_all );
			app.post( '/sync-tap/block', BlockController.createOrUpdate );
			app.get( '/sync-mobile/block/:start_date/:end_date', Middleware.v_1_0.VerifyToken, Controllers.v_1_0.Block.sync_mobile );
			app.get( '/block', Middleware.v_1_0.VerifyToken, Controllers.v_1_0.Block.find );
			//app.post( '/block', BlockController.create );
			app.get( '/block/:id', Controllers.v_1_0.Block.find_one );
			//app.put( '/block/:id', BlockController.update );
			//app.delete( '/block/:id', BlockController.delete );
			app.post( '/geom/design/block', Middleware.v_1_0.VerifyToken, Controllers.v_1_0.Block.find_one_geom );

			// Comp
			app.get( '/comp/all', Controllers.v_1_0.Comp.find_all );
			app.get( '/comp/q', Controllers.v_1_0.Comp.find_all );
			app.post( '/sync-tap/comp', token_verify, CompController.createOrUpdate );
			app.get( '/sync-mobile/comp/:start_date/:end_date', Middleware.v_1_0.VerifyToken, Controllers.v_1_0.Comp.sync_mobile );
			//app.delete( '/comp/:id', token_verify, CompController.delete );
			app.get( '/comp', Middleware.v_1_0.VerifyToken, Controllers.v_1_0.Comp.find );
			//app.post( '/comp', CompController.create );
			app.get( '/comp/:id', Controllers.v_1_0.Comp.find_one );
			//app.put( '/comp/:id', CompController.update );

			// Est
			app.get( '/est/all', Middleware.v_1_0.VerifyToken, Controllers.v_1_0.Est.find_all );
			app.get( '/est/q', Middleware.v_1_0.VerifyToken, Controllers.v_1_0.Est.find_all );
			app.post( '/sync-tap/est', verifyToken, EstController.createOrUpdate );
			app.get( '/sync-mobile/est/:start_date/:end_date', Middleware.v_1_0.VerifyToken, Controllers.v_1_0.Est.sync_mobile );
			app.get( '/est', Middleware.v_1_0.VerifyToken, Controllers.v_1_0.Est.find );
			//app.post( '/est', EstController.create );
			app.get( '/est/:id', Middleware.v_1_0.VerifyToken, Controllers.v_1_0.Est.find_one );
			//app.put( '/est/:id', EstController.update );
			//app.delete( '/est/:id', EstController.delete );

			// Land Use
			app.get( '/land-use/all', Middleware.v_1_0.VerifyToken, Controllers.v_1_0.LandUse.find_all );
			app.get( '/land-use/q', Middleware.v_1_0.VerifyToken, Controllers.v_1_0.LandUse.find_all );
			app.get( '/report/land-use/:id', Middleware.v_1_0.VerifyToken, Controllers.v_1_0.LandUse.findOneForReport );
			app.get( '/land-use/q', Middleware.v_1_0.VerifyToken, Controllers.v_1_0.LandUse.find_all );
			app.get( '/land-use', Middleware.v_1_0.VerifyToken, Controllers.v_1_0.LandUse.find );
			app.post( '/sync-tap/land-use', token_verify, LandUseController.createOrUpdate );
			app.get( '/sync-mobile/land-use/:start_date/:end_date', Middleware.v_1_0.VerifyToken, Controllers.v_1_0.LandUse.sync_mobile );

		 	// Region
			app.get( '/region/all', Controllers.v_1_0.Region.find_all );
			app.get( '/region/q', Controllers.v_1_0.Region.find_all );
			app.post( '/sync-tap/region', Middleware.v_1_0.VerifyToken, Controllers.v_1_0.Region.createOrUpdate );
			app.get( '/sync-mobile/region/:start_date/:end_date', Middleware.v_1_0.VerifyToken, Controllers.v_1_0.Region.sync_mobile );
			//app.post( '/region', Middleware.v_1_0.VerifyToken, Controllers.v_1_0.Region.create );
			app.get( '/region', Middleware.v_1_0.VerifyToken, Controllers.v_1_0.Region.find );
			//app.get( '/region/:id', Middleware.v_1_0.VerifyToken, Controllers.v_1_0.Region.findOne );
			//app.put( '/region/:id', Middleware.v_1_0.VerifyToken, Controllers.v_1_0.Region.update );
			//app.delete( '/region/:id', Middleware.v_1_0.VerifyToken, Controllers.v_1_0.Region.delete );

	}