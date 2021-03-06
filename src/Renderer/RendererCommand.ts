import VertexBuffer from './VertexBuffer';
import IndexBuffer from './IndexBuffer';
import UniformBuffer from './UniformBuffer';
import VertexArray from './VertexArray';
import Shader from './Shader';
import Texture2D from './Texture';


class RendererCommand {
	private static ctx: WebGL2RenderingContext;

	public static init = (context: WebGL2RenderingContext): void => {
		RendererCommand.ctx = context;

		VertexBuffer.init(context);
		IndexBuffer.init(context);
		UniformBuffer.init(context);
		VertexArray.init(context);
		Shader.init(context);
		Texture2D.init(context);

		RendererCommand.ctx.enable(RendererCommand.ctx.CULL_FACE);

		RendererCommand.ctx.enable(RendererCommand.ctx.DEPTH_TEST);
		RendererCommand.ctx.depthFunc(RendererCommand.ctx.LEQUAL);

		RendererCommand.ctx.enable(RendererCommand.ctx.BLEND);
		RendererCommand.ctx.blendFunc(RendererCommand.ctx.SRC_ALPHA, RendererCommand.ctx.ONE_MINUS_SRC_ALPHA);
	}

	public static setViewport = (x = 0, y = 0, width = RendererCommand.ctx.drawingBufferWidth, height = RendererCommand.ctx.drawingBufferHeight): void => {
		RendererCommand.ctx.viewport(x, y, width, height);
	}

	public static setClearColor = (color: Float32Array): void => {
		RendererCommand.ctx.clearColor(color[0], color[1], color[2], color[3]);
	}

	public static clear = (): void => {
		RendererCommand.ctx.clear(RendererCommand.ctx.COLOR_BUFFER_BIT | RendererCommand.ctx.DEPTH_BUFFER_BIT);
	}

	public static drawIndexed = (vertexArray: VertexArray, indexCount?: number, indexStart = 0): void => {
		vertexArray.bind();
		const count = indexCount ?? vertexArray.getIndexBuffer().count;
		RendererCommand.ctx.drawElements(RendererCommand.ctx.TRIANGLES,
			count,
			vertexArray.getIndexBuffer().type,
			vertexArray.getIndexBuffer().indiceSize * indexStart);
	}
}


export default RendererCommand;
