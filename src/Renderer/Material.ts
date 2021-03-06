import Shader, { UniformBlockInfo } from './Shader';
import UniformBuffer from './UniformBuffer';


export class Material {
	public readonly shader: Shader;
	public readonly materialInfo: UniformBlockInfo;

	constructor(shader: Shader) {
		this.shader = shader;
		this.materialInfo = this.shader.getUniformBlocksInfo().get('ub_Material') as UniformBlockInfo;
	}
}


export class MaterialInstance {
	private material: Material;

	private buffer: ArrayBuffer;
	private uniformBuffer: UniformBuffer;

	constructor(material: Material) {
		this.material = material;
		this.buffer = new ArrayBuffer(this.material.materialInfo.size);
		this.uniformBuffer = new UniformBuffer(this.material.materialInfo.size);
	}

	public set = (name: string, buffer: ArrayLike<number>, type: new (buffer: ArrayBuffer) => TypedArrayBuffer): void => {
		const offset = this.material.materialInfo.uniforms.get(name)?.offset;
		(new type(this.buffer)).set(buffer, offset);
	}

	public upload = (): void => {
		this.uniformBuffer.setData(this.buffer);
		this.material.shader.bind();
		this.material.shader.uploadBuffer('ub_Material', this.uniformBuffer);
	}

	public getShader = (): Shader => this.material.shader;
}

export default Material;
