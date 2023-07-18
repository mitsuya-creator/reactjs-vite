export default function ImgList({ src }) {
    return <img src={src.imgUrl} alt={src.name} width={300} height={300} />
}