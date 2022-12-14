export default function msgSuccess(response, msg)
    switch (response.status) {
        case 204:
            this.$toast.add({
                severity: "success",
                summary: "Alerta de Sucesso",
                detail: "Operação Realizada com Sucesso."
            })
    }