import test from 'ava';
import pkgVersions from '.';

test('main', async t => {
	const versions = await pkgVersions('ava');
	t.true(versions.has('0.15.0'));
});
