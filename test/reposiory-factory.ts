const reposioryFactory = artifacts.require('ReposioryFactory')
const stateContractFactory = artifacts.require('State')

contract('ReposioryFactory', ([deployer]) => {
	describe('Create a new Repository Contract', () => {
		it('Create a new Repository Contract of a package')

		it(
			'Should fail to create a new Repository Contract when failed authorization of npm'
		)

		it('Should fail to create a new Repository Contract of a package when the package already has a Repository Contract', async () => {
			const contract = await reposioryFactory.new({from: deployer})
			const state = await stateContractFactory.new({from: deployer})
			await state.addOperator(contract.address, {from: deployer})
			await contract.changeStateAddress(state.address, {from: deployer})
			await contract.createRepository('pkg', {from: deployer})
			const results = await contract
				.createRepository('pkg', {from: deployer})
				.catch((err: Error) => err)
			expect(results).to.instanceOf(Error)
			expect((results as any).reason).to.be.equal(
				'Repository is already created'
			)
		})
	})

	describe('Destroy', () => {
		it('Destruct this contract')

		it(
			'Should fail to destruct this contract when sent from the non-owner account'
		)
	})
})
