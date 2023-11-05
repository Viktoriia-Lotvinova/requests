import { defineStore } from 'pinia'

export const useRequestStore = defineStore('request', {
  state: () => ({
    requests: [],
  }),
  getters: {
    getAllRequests: (state) => state.requests,
    getRequestById: (state) => (id) => state.requests.find(request => request.id == id)
  },
  actions: {
    createRequest(request) {
      this.requests.push(request);
    },
    deleteRequest(id){
      this.requests = this.requests.filter((request) => request.id !== id);
    },
    editRequest(updatedRequest){
      this.requests = this.requests.map(request => {
        if (request.id == updatedRequest.id) {
          return updatedRequest; 
        }
        return request;
      });
    }
  }
})