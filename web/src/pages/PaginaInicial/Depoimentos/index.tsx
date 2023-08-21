import styled from "styled-components"

const Container = styled.section`
width: 50%;
`

const Titulo = styled.h2`
font-weight: 700;
font-size: 24px;
line-height: 28px;
text-align: center;
color: var(--azul-escuro);
`

const Texto = styled.p`
line-height: 19px;
color: var(--cinza);
`

const Subtitulo = styled.h3`
line-height: 19px;
font-weight: 700;
color: var(--cinza-escuro);
text-align: center;
`

const Linha = styled.hr`
color: var(--cinza);
`

export default function Depoimentos() {
    return (
        <Container>
            <Titulo>Depoimentos</Titulo>
            <Texto>Mas, de fato, ambos acusamos e com justo ódio trazemos aqueles que o merecem, que são suavizados e corrompidos pela bajulação dos prazeres presentes, cegados pela luxúria pelas dores e problemas que estão prestes a experimentar, eles não fornecem isso. E, de fato, a distinção entre essas coisas é fácil e conveniente.</Texto>
            <Subtitulo>Pedro, 40 anos, São Paulo/SP.</Subtitulo>
            <Linha />
            <Texto>Mas, de fato, ambos acusamos e com justo ódio trazemos aqueles que o merecem, que são suavizados e corrompidos pela bajulação dos prazeres presentes, cegados pela luxúria pelas dores e problemas que estão prestes a experimentar, eles não fornecem isso. E, de fato, a distinção entre essas coisas é fácil e conveniente.</Texto>
            <Subtitulo>Júlia, 45 anos, São Paulo/SP.</Subtitulo>
            <Linha />
            <Texto>Mas, de fato, ambos acusamos e com justo ódio trazemos aqueles que o merecem, que são suavizados e corrompidos pela bajulação dos prazeres presentes, cegados pela luxúria pelas dores e problemas que estão prestes a experimentar, eles não fornecem isso. E, de fato, a distinção entre essas coisas é fácil e conveniente.</Texto>
            <Subtitulo>Carlos, 39 anos, São Paulo/SP.</Subtitulo>
            <Linha />
        </Container>
    )
}