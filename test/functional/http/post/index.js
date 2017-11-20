'use strict';

var parallelTests = require('../../../common/parallelTests').parallelTests;

var pathFiles = [
	'./0.transfer',
	'./1.second.secret',
	'./2.delegate',
	'./3.votes',
	'./4.multisig',
	'./5.dapps',
	'./6.dapps.inTransfer',
	'./7.dapps.outTransfer',
	
	'./1.X.validation/1.0.transfer',
	'./1.X.validation/1.1.second.signature',
	'./1.X.validation/1.2.delegate',
	'./1.X.validation/1.3.votes',
	'./1.X.validation/1.4.multisig',
	'./1.X.validation/1.5.dapps',
	'./1.X.validation/1.6.dapps.inTransfer',
	'./1.X.validation/1.7.dapps.outTransfer'
];

parallelTests(pathFiles, 'test/functional/http/post/');
