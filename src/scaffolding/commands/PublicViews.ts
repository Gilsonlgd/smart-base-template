import { BaseCommand, Arg, RunnableArgs, renderTemplate, includeRelated } from 'angel-manager';

export default class Components extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public commandName = 'make:publicView';

  /**
   * Description of the command
   */
  public description = 'Makes a new Public View';

  /**
   * Liquid template path
   */
  public templatePath = 'views/public';

  /**
   * Processed template destination path
   */
  public destinationPath = 'views/public';

  /**
   * The extension of the component
   */
  public extension = 'tsx';

  /**
   * If true, the template will be generated inside componentName directory
   */
  public subDir = true;

  /**
   *
   * @returns an array of Arguments representing the arguments
   * to be passed to the command in the order they are defined
   */
  public args(): Arg[] {
    return [{ name: 'viewName', type: 'string' }];
  }

  public async run(args: RunnableArgs): Promise<void> {
    try {
      await renderTemplate(this, args);
      includeRelated(this, args, ['scoped.css']);
    } catch (error) {
      console.error();
    }
  }
}
