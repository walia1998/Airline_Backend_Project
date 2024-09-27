class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log("Something went wrong");
        }
    }

    async destroy(modelID) {
        try {
            await this.model.destroy({
                where: {
                    id: modelID
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong");
        }
    }

    async get(modelId) {
        try {
            const result = await this.model.findByPk(modelId);
            return result
        } catch (error) {
            console.log("Something went wrong");
        }
    }

    async getAll() {
        try {
            const result = await this.model.findAll();
            return result;
        } catch (error) {
            console.log("Something went wrong");
        }
    }

    async update(modelId, data) {
        try {
            const result = await this.model.update(data, {
                where: {
                    id: modelId
                }
            });
            return result;
        } catch (error) {
            console.log("Something went wrong");
        }
    }
}

module.exports = CrudRepository;
