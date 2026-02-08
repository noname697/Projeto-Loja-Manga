interface TituloProps {
  tamanho?: number;
  cor?: string;
  peso?: number;
  alinhamento?: "left" | "center" | "right";
  children: React.ReactNode;
}

const Titulo = ({
  tamanho = 22,
  cor = "#000",
  peso = 400,
  alinhamento = "center",
  children,
}: TituloProps) => {
  return (
    <h1
      style={{
        fontSize: `${tamanho}px`,
        color: cor,
        fontWeight: peso,
        textAlign: alinhamento,
        margin: "5rem 0",
        padding: "0.5rem",
        borderBottom: `3px solid ${cor}`,
        display: "inline-block"
      }}
    >
      {children}
    </h1>
  );
};

export default Titulo;
