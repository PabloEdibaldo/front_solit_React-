class ApiRequest {
    constructor() {
        this.baseURL = "http://172.16.15.37:8000/api/sistemaSolit/";
        this.token = sessionStorage.getItem("accessToken");
        this.data = null;
        this.loading = true;
        this.error = null;
    }

    async fetchData(endpoint, method, body = null, id = null, archivo = false) {
        this.loading = true;
        let response;

        try {
            if (method === "GET" || method === "DELETE") {
                const urlWithId = id ? `${this.baseURL}${endpoint}${id}/` : `${this.baseURL}${endpoint}`;
                response = await fetch(urlWithId, {
                    method,
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${this.token}`
                    }
                });
            } else if (method === "PUT" || method === "POST") {
                const finalUrl = id ? `${this.baseURL}${endpoint}${id}/` : `${this.baseURL}${endpoint}`;
                response = await fetch(finalUrl, {
                    method,
                    headers: { 
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${this.token}`
                    },
                    body: JSON.stringify(body),
                });
            } else if (method === "GET1") {
                const urlWithId = `${this.baseURL}${endpoint}${id}/`;
                response = await fetch(urlWithId, { method: "GET" });
            } else if (method === "POST1" && archivo === true) {
                response = await this.sendFormDataRequest(`${this.baseURL}${endpoint}`, body);
            }

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            this.data = await response.json();
        } catch (error) {
            this.handleError(error);
        } finally {
            this.loading = false;
        }
    }

    async sendFormDataRequest(url, body) {
        const formData = new FormData();
        formData.append('pdf_file', body);
        return await fetch(url, {
            method: "POST",
            body: formData,
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }

    handleError(error) {
        this.error = error.message || '';
        this.loading = false;
    }

    getData() {
        return this.data;
    }

    isLoading() {
        return this.loading;
    }

    getError() {
        return this.error;
    }
}
export default ApiRequest;
